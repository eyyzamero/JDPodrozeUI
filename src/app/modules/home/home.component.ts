import { Component, OnInit } from '@angular/core';
import { ExcursionsHttpService } from '../excursions/services/http/excursions-http.service';
import { ExcursionsDataService } from '../excursions/services/data/excursions-data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private readonly _excursionsHttpService: ExcursionsHttpService,
		private readonly _excursionsDataService: ExcursionsDataService
	) { }

	ngOnInit(): void {
		if (!this._excursionsDataService.currentValue.data?.length)
			this._excursionsHttpService.getExcursionsListShort();
	}
}