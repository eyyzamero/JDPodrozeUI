import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-admin-excursions-table-filters',
	templateUrl: './admin-excursions-table-filters.component.html',
	styleUrls: ['./admin-excursions-table-filters.component.scss']
})
export class AdminExcursionsTableFiltersComponent {

	@Input() active: boolean | null = null;

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute
	) { }

	onActiveFilterChange(value: boolean | null) {
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