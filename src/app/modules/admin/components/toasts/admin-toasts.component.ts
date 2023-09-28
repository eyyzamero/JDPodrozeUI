import { Component } from '@angular/core';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';

@Component({
	selector: 'app-admin-toasts',
	templateUrl: './admin-toasts.component.html',
	styleUrls: ['./admin-toasts.component.scss'],
	host: {
		class: 'toast-container position-fixed end-0 p-3',
		style: 'z-index: 1000'
	}
})
export class AdminToastsComponent {
	
	constructor(
		public toastsService: ToastsService
	) { }
}
