import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminExcursionsFormCommonComponent } from '../../../excursions/components/common/form/admin-excursions-form.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ContextType } from 'src/app/core/enums';
import { AdminExcursionsFormBase } from '../../../excursions/components/common/form/base';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminExcursionsHttpService, AdminExcursionsMapperService } from 'src/app/modules/admin/services';
import { AdminExcursionsFormService } from '../../../excursions/components/form/services/form';
import { ToastsService } from 'src/app/core/services';
import { take } from 'rxjs';
import { ExcursionsGetListReq } from 'src/app/core/contracts';

@Component({
	selector: 'app-admin-templates-form',
	templateUrl: './admin-templates-form.component.html',
	styleUrls: ['./admin-templates-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		AdminExcursionsFormCommonComponent,
        LoadingSpinnerModule
	]
})
export class AdminTemplatesFormComponent extends AdminExcursionsFormBase {

	protected override _context: ContextType = ContextType.EXCURSIONS_TEMPLATES;

	constructor(
        _router: Router,
        _activatedRoute: ActivatedRoute,
        _adminExcursionsMapperService: AdminExcursionsMapperService,
        _adminExcursionsHttpService: AdminExcursionsHttpService,
		_adminExcursionsFormService: AdminExcursionsFormService,
        private readonly _toastsService: ToastsService,
    ) {
		super(_adminExcursionsFormService, _router, _activatedRoute, _adminExcursionsHttpService, _adminExcursionsMapperService)
	}

	protected _addExcursion(): void {
        this.submitButtonDisabled.set(true);
        const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsAddReq(this.form());
        this._adminExcursionsHttpService.addObservable(req).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._getList();
                this._navigateBackToList();
                this._toastsService.show('Pomyślnie dodano szablon wycieczki', 'toast-success');
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.submitButtonDisabled.set(false);
            }
        });
    }

	protected _editExcursion(): void {
        this.submitButtonDisabled.set(true);
        const req = this._adminExcursionsMapperService.iExcursionFormGroupToIExcursionsEditReq(this.form());
        this._adminExcursionsHttpService.editObservable(req).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._getList();
                this._navigateBackToList();
                this._toastsService.show('Pomyślnie edytowano szablon wycieczki', 'toast-success');
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.submitButtonDisabled.set(false);
            }
        });
    }

	protected _getList(): void {
		const request = new ExcursionsGetListReq(this.listSortCurrent(), this.listFilterActive(), true);
		this._adminExcursionsHttpService.getList(request);
	}

	protected _navigateBackToList() {
        this._router.navigate(['/admin/templates'], {
            queryParamsHandling: 'merge'
        });
    }
}