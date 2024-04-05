import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { take } from 'rxjs';
import { ContextType } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsDataService } from 'src/app/modules/admin/services/data/admin-excursions-data.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { AdminExcursionsSortType } from '../../enums';
import { ExcursionsGetListReq } from 'src/app/core/contracts';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminExcursionsTableViewComponent } from '../common/table-view/admin-excursions-table-view.component';
import { AdminExcursionsTableModule } from './admin-excursions-table.module';
import { AdminExcursionsTableBase } from '../../base';

@Component({
	templateUrl: './admin-excursions-table.component.html',
	styleUrls: ['./admin-excursions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        AdminExcursionsTableViewComponent,
        RouterModule,
        AdminExcursionsTableModule
    ]
})
export class AdminExcursionsTableComponent extends AdminExcursionsTableBase {

    active: WritableSignal<boolean | null> = signal(null);
    
    readonly sorting: boolean = true;
    readonly context: ContextType = ContextType.EXCURSIONS;

	constructor(
		_router: Router,
		_activatedRoute: ActivatedRoute,
		_adminExcursionsDataService: AdminExcursionsDataService,
		_adminExcursionsHttpService: AdminExcursionsHttpService,
		_toastsService: ToastsService
	) {
        super(_router, _activatedRoute, _toastsService, _adminExcursionsHttpService, _adminExcursionsDataService);
    }

    makeTemplate(excursionId: number): void {
        this.buttonsEnabled.set(false);
        this._adminExcursionsHttpService.changeToTemplateObservable(excursionId).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._toastsService.show('Pomyślnie zmieniono wycieczkę w szablon', 'toast-success');
				this._getList();
                this.buttonsEnabled.set(true);
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.buttonsEnabled.set(true);
            }
        });
    }

    protected override _handleQueryParams(queryParams: Params): void {
        this.sortCurrent.set(queryParams['sort'] ? +queryParams['sort'] as AdminExcursionsSortType : AdminExcursionsSortType.DATE_FROM);
        this.active.set(queryParams['active']  ? JSON.parse(queryParams['active']) : null);
        this._getList();
    }

	protected _getList(): void {
		const request = new ExcursionsGetListReq(this.sortCurrent(), this.active());
		this._adminExcursionsHttpService.getList(request);
	}
}