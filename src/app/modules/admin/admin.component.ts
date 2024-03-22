import { Component, OnDestroy } from '@angular/core';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {

	constructor(
		private _toastsService: ToastsService
	) { }

	ngOnDestroy(): void {
		this._toastsService.clear();
	}
}