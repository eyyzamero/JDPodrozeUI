import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersListFiltersActiveComponent } from './components/active/admin-orders-list-filters-active.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrdersListFiltersActiveOptions } from './enums';

@Component({
    selector: 'app-admin-orders-list-filters',
    templateUrl: './admin-orders-list-filters.component.html',
    styleUrls: ['./admin-orders-list-filters.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        AdminOrdersListFiltersActiveComponent
    ]
})
export class AdminOrdersListFiltersComponent {

    @Input() active: AdminOrdersListFiltersActiveOptions = AdminOrdersListFiltersActiveOptions.ALL;

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute
	) { }

	onActiveFilterChange(value: AdminOrdersListFiltersActiveOptions) {
		if (value !== this.active) {
			this.active = value;
			this._router.navigate(['.'], {
				queryParams: {
					active: value
				},
				queryParamsHandling: 'merge',
				relativeTo: this._activatedRoute
			});
		}
	}
}