import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { FormMode, LoadingState } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { AdminExcursionsMapperService } from 'src/app/modules/admin/services/mapper/admin-excursions-mapper.service';
import { AdminExcursionsFormService } from './services/form';
import { AdminExcursionsFormCommonComponent } from '../common/form/admin-excursions-form.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ExcursionsGetListReq } from 'src/app/core/contracts';

@Component({
    selector: 'app-admin-excursions-form',
    templateUrl: './admin-excursions-form.component.html',
    styleUrls: ['./admin-excursions-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        AdminExcursionsFormCommonComponent,
        LoadingSpinnerModule
    ]
})
export class AdminExcursionsFormComponent implements OnInit {

    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    form: WritableSignal<FormGroup> = signal(new FormGroup({}));
    submitButtonDisabled: WritableSignal<boolean> = signal(false);
    mode: WritableSignal<FormMode> = signal(FormMode.NEW);
    template: boolean = false;

    readonly LoadingState = LoadingState;
    readonly FormMode = FormMode;


    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _adminExcursionsMapperService: AdminExcursionsMapperService,
        private readonly _adminExcursionsHttpService: AdminExcursionsHttpService,
        private readonly _toastsService: ToastsService,
        private readonly _adminExcursionsFormService: AdminExcursionsFormService
    ) { }

    ngOnInit(): void {
        this._initForm();
        this._initSubscriptions();
    }

    private _initForm(): void {
        let form = this._adminExcursionsFormService.form;

        if (this._activatedRoute.snapshot.data['template'] === true) {
            this.template = true;
            form.controls['template'].setValue(true);
        }
        this.form.set(form);
    }

    private _initSubscriptions(): void {
        this._activatedRoute.params.pipe(
            take(1)
        ).subscribe({
            next: (params) => {
                const id = params['id'];

                if (id) {
                    this._getData(id);
                    this.mode.set(FormMode.EDIT);
                } else
                    this.state.set(LoadingState.LOADED);
            }
        });
    }

    getFormControl(key: string) {
        return this.form().get(key) as FormControl;
    }

    onFormSubmit(): void {
        if (this.form().valid)
            this.form().controls['id'].value ? this._editExcursion() : this._addExcursion();
    }

    private _addExcursion(): void {
        this.submitButtonDisabled.set(true);
        const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsAddReq(this.form());
        this._adminExcursionsHttpService.addObservable(req).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._getList();
                this._navigateBackToList();
                this._toastsService.show(this.template ? 'Pomyślnie dodano szablon wycieczki' : 'Pomyślnie dodano wycieczkę', 'toast-success');
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.submitButtonDisabled.set(false);
            }
        });
    }

    private _editExcursion(): void {
        this.submitButtonDisabled.set(true);
        const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsEditReq(this.form());
        this._adminExcursionsHttpService.editObservable(req).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._getList();
                this._navigateBackToList();
                this._toastsService.show(this.template ? 'Pomyślnie edytowano szablon wycieczki' : 'Pomyślnie edytowano wycieczkę', 'toast-success');
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.submitButtonDisabled.set(false);
            }
        });
    }

    private _getData(id: number): void {
        this._adminExcursionsHttpService.getItemWithImagesObservable(id).pipe(
            take(1)
        ).subscribe({
            next: (res) => {
                setTimeout(() => {
                    this._adminExcursionsMapperService.iExcursionsGetItemResToFormGroup(res, this.form());
                    this.state.set(LoadingState.LOADED);
                });
            }
        });
    }

    private _getList(): void {
		const request = new ExcursionsGetListReq();

        if (this.template)
            request.templates = true;

		this._adminExcursionsHttpService.getList(request);
	}

    private _navigateBackToList() {
        this._router.navigate(this.template ? ['/admin/templates'] : ['/admin'], {
            queryParamsHandling: 'merge'
        });
    }
}