import { Directive, OnInit, WritableSignal, signal } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ContextType, FormMode, LoadingState } from "src/app/core/enums";
import { AdminExcursionsFormService } from "../../../form/services/form";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs";
import { AdminExcursionsHttpService, AdminExcursionsMapperService } from "src/app/modules/admin/services";
import { AdminExcursionsSortType } from "../../../../enums";

@Directive()
export abstract class AdminExcursionsFormBase implements OnInit {

	state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    form: WritableSignal<FormGroup> = signal(new FormGroup({}));
    submitButtonDisabled: WritableSignal<boolean> = signal(false);
    mode: WritableSignal<FormMode> = signal(FormMode.NEW);

    listSortCurrent: WritableSignal<AdminExcursionsSortType> = signal(AdminExcursionsSortType.NONE);
	listFilterActive: WritableSignal<boolean | null> = signal(null);
	
	readonly LoadingState = LoadingState;
    readonly FormMode = FormMode;
	
	protected readonly abstract _context: ContextType

	constructor(
		private readonly _adminExcursionsFormService: AdminExcursionsFormService,
		protected readonly _router: Router,
		protected readonly _activatedRoute: ActivatedRoute,
		protected readonly _adminExcursionsHttpService: AdminExcursionsHttpService,
		protected readonly _adminExcursionsMapperService: AdminExcursionsMapperService
	) { }

	ngOnInit(): void {
		this._initForm();
		this._initMatrixParams();
		this._initQueryParams();
	}

	private _initForm(): void {
		let form = this._adminExcursionsFormService.form;

		if (this._context === ContextType.EXCURSIONS_TEMPLATES)
			form.controls['template'].setValue(true);

        this.form.set(form);
	}

	private _initMatrixParams(): void {
		this._activatedRoute.params.pipe(
            take(1)
        ).subscribe({
            next: (params) => {
                const id = params['id'];
				
                if (id && !isNaN(id)) {
                    this._getData(+id);
                    this.mode.set(FormMode.EDIT);
                } else
                    this.state.set(LoadingState.LOADED);
            }
        });
	}

	private _initQueryParams(): void {
		this._activatedRoute.queryParams.pipe(
			take(1)
		).subscribe({
			next: (queryParams) => {
				this.listSortCurrent.set(queryParams['sort'] ? +queryParams['sort'] as AdminExcursionsSortType : AdminExcursionsSortType.DATE_FROM);
        		this.listFilterActive.set(queryParams['active']  ? JSON.parse(queryParams['active']) : null);
			}
		});
	}

	onFormSubmit(): void {
		this.form().markAllAsTouched();
		this.form().updateValueAndValidity();

        if (this.form().valid) {
            this.form().controls['id'].value
				? this._editExcursion()
				: this._addExcursion();
		}
    }

	protected abstract _addExcursion(): void;
	protected abstract _editExcursion(): void;
	protected abstract _getList(): void;
	protected abstract _navigateBackToList(): void;

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
}