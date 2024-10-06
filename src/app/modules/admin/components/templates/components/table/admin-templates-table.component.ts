import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminExcursionsTableViewComponent } from '../../../excursions/components/common/table-view/admin-excursions-table-view.component';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AdminExcursionsTableBase } from '../../../excursions/base';
import { AdminExcursionsDataService, AdminExcursionsHttpService } from 'src/app/modules/admin/services';
import { ToastsService } from 'src/app/core/services';
import { ContextType, FormMode } from 'src/app/core/enums';
import { AdminExcursionsSortType } from '../../../excursions/enums';
import { ExcursionsGetListReq } from 'src/app/core/contracts';
import { take } from 'rxjs';
import { IExcursionModel } from 'src/app/modules/excursions/models';

@Component({
    templateUrl: './admin-templates-table.component.html',
    styleUrls: ['./admin-templates-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        AdminExcursionsTableViewComponent,
        RouterModule
    ]
})
export class AdminTemplatesTableComponent extends AdminExcursionsTableBase {

    readonly sorting: boolean = false;
    readonly context: ContextType = ContextType.EXCURSIONS_TEMPLATES;
    readonly columns: (keyof IExcursionModel)[] = ['title', 'dateFrom', 'dateTo', 'seats', 'active', 'inCarousel'];

    constructor(
		_router: Router,
		_activatedRoute: ActivatedRoute,
		_adminExcursionsDataService: AdminExcursionsDataService,
		_adminExcursionsHttpService: AdminExcursionsHttpService,
		_toastsService: ToastsService
	) {
        super(_router, _activatedRoute, _toastsService, _adminExcursionsHttpService, _adminExcursionsDataService);
    }

    delete(id: number): void {
        this.buttonsEnabled.set(false);
		this._adminExcursionsHttpService.deleteObservable(id).pipe(
            take(1)
        ).subscribe({
			next: () => {
				this._toastsService.show('Pomyślnie usunięto szablon wycieczki', 'toast-success');
				this._getList();
                this.buttonsEnabled.set(true);
			},
			error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.buttonsEnabled.set(true);
            }
		})
	}

    addBasedOnTemplate(id: number): void {
        this._router.navigate([`./form/${FormMode.NEW.toLowerCase()}/${id}`], {
            relativeTo: this._activatedRoute,
            queryParamsHandling: 'merge'
		});
    }

    protected override _handleQueryParams(queryParams: Params): void {
        this.sortCurrent.set(queryParams['sort'] ? +queryParams['sort'] as AdminExcursionsSortType : AdminExcursionsSortType.DATE_FROM);
        this._getList();
    }

    protected override _getList(): void {
        const request = new ExcursionsGetListReq(this.sortCurrent(), null, true);
		this._adminExcursionsHttpService.getList(request);
    }
}