import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, first } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { AdminExcursionsMapperService } from 'src/app/modules/admin/services/mapper/admin-excursions-mapper.service';
import { AdminExcursionsFormService } from './services/form';
import { IExcursionImageModel } from 'src/app/modules/excursions/models';

@Component({
	selector: 'app-admin-excursions-form',
	templateUrl: './admin-excursions-form.component.html',
	styleUrls: ['./admin-excursions-form.component.scss']
})
export class AdminExcursionsFormComponent implements OnInit, OnDestroy {

	state: LoadingState = LoadingState.LOADING;
	form: FormGroup = new FormGroup({});
	submitButtonDisabled: boolean = false;

	get images(): FormArray {
		return this.form.get('images') as FormArray<AbstractControl<IExcursionImageModel>>;
	}

	readonly LoadingState = LoadingState;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _adminExcursionsMapperService: AdminExcursionsMapperService,
		private _adminExcursionsHttpService: AdminExcursionsHttpService,
		private _toastsService: ToastsService,
		private _adminExcursionsFormService: AdminExcursionsFormService
	) { }

	ngOnInit(): void {
		this._initForm();
		this._initSubscriptions();
	}

	private _initForm(): void {
		this.form = this._adminExcursionsFormService.form;
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._activatedRoute.params.subscribe({
				next: (params) => {
					const id = params['id'];
					id ? this._getData(id) : this.state = LoadingState.LOADED;
				}
			})
		);
	}

	getFormControl(key: string) {
		return this.form.get(key) as FormControl;
	}

	onFormSubmit(): void {
		this.form.valid
			? this.form.controls['id'].value ? this._editExcursion() : this._addExcursion()
			: this._toastsService.show('W formularzu występuje co najmniej jeden błąd', 'toast-error')
	}

	private _addExcursion() {
		this.submitButtonDisabled = true;
		const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsAddReq(this.form);
		this._subscriptions.push(
			this._adminExcursionsHttpService.addObservable(req).subscribe({
				next: () => {
					this._adminExcursionsHttpService.getList();
					this._router.navigate(['/admin']);
					this._toastsService.show('Pomyślnie dodano wycieczkę', 'toast-success');
				},
				error: () => {
					this._toastsService.show('Wystąpił błąd', 'toast-error');
					this.submitButtonDisabled = false;
				}
			})
		);
	}

	private _editExcursion() {
		this.submitButtonDisabled = true;
		const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsEditReq(this.form);
		this._subscriptions.push(
			this._adminExcursionsHttpService.editObservable(req).subscribe({
				next: () => {
					this._adminExcursionsHttpService.getList();
					this._router.navigate(['/admin']);
					this._toastsService.show('Pomyślnie edytowano wycieczkę', 'toast-success');
				},
				error: () => {
					this._toastsService.show('Wystąpił błąd', 'toast-error');
					this.submitButtonDisabled = false;
				}
			})
		);
	}

	private _getData(id: number): void {
			this._adminExcursionsHttpService.getItemWithImagesObservable(id).pipe(
				first()
			).subscribe({
				next: (res) => {
					setTimeout(() => {
						this._adminExcursionsMapperService.iExcursionsGetItemResToFormGroup(res, this.form);
						this.state = LoadingState.LOADED;
					});
				}
			})
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}