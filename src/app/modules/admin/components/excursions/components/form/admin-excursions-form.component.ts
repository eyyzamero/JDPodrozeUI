import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ContextType } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { AdminExcursionsMapperService } from 'src/app/modules/admin/services/mapper/admin-excursions-mapper.service';
import { AdminExcursionsFormService } from './services/form';
import { AdminExcursionsFormCommonComponent } from '../common/form/admin-excursions-form.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ExcursionsGetListReq } from 'src/app/core/contracts';
import { AdminExcursionsFormBase } from '../common/form/base';

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
export class AdminExcursionsFormComponent extends AdminExcursionsFormBase {

	protected override _context: ContextType = ContextType.EXCURSIONS;

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
                this._toastsService.show('Pomyślnie dodano wycieczkę', 'toast-success');
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
                this._toastsService.show('Pomyślnie edytowano wycieczkę', 'toast-success');
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.submitButtonDisabled.set(false);
            }
        });
    }

    protected _getList(): void {
		const request = new ExcursionsGetListReq(this.listSortCurrent(), this.listFilterActive());
		this._adminExcursionsHttpService.getList(request);
	}

    protected _navigateBackToList() {
        this._router.navigate(['/admin'], {
            queryParamsHandling: 'merge'
        });
    }
}