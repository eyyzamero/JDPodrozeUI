import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminExcursionsHttpService } from './services/http/admin-excursions-http.service';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

	constructor(
		private _toastsService: ToastsService,
		private _adminExcursionsHttpService: AdminExcursionsHttpService
	) { }

	ngOnInit(): void {
		this._adminExcursionsHttpService.getList();
	}

	ngOnDestroy(): void {
		this._toastsService.clear();
	}
}