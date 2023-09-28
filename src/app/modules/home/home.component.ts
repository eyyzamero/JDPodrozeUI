import { Component, OnInit } from '@angular/core';
import { ExcursionsHttpService } from '../excursions/services/http/excursions-http.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private _excursionsHttpService: ExcursionsHttpService
	) { }

	ngOnInit(): void {
		this._excursionsHttpService.getExcursionsListShort();
	}
}