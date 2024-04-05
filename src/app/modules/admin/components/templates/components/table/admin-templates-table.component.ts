import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminExcursionsTableViewComponent } from '../../../excursions/components/common/table-view/admin-excursions-table-view.component';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AdminExcursionsTableBase } from '../../../excursions/base';
import { AdminExcursionsDataService, AdminExcursionsHttpService } from 'src/app/modules/admin/services';
import { ToastsService } from 'src/app/core/services';
import { ContextType } from 'src/app/core/enums';
import { AdminExcursionsSortType } from '../../../excursions/enums';
import { ExcursionsGetListReq } from 'src/app/core/contracts';

@Component({
    selector: 'app-admin-templates-table',
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

    constructor(
		_router: Router,
		_activatedRoute: ActivatedRoute,
		_adminExcursionsDataService: AdminExcursionsDataService,
		_adminExcursionsHttpService: AdminExcursionsHttpService,
		_toastsService: ToastsService
	) {
        super(_router, _activatedRoute, _toastsService, _adminExcursionsHttpService, _adminExcursionsDataService);
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