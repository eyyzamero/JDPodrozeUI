import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from 'src/app/core/enums';

@Component({
	selector: 'app-excursions-enroll-success',
	templateUrl: './excursions-enroll-success.component.html',
	styleUrls: ['./excursions-enroll-success.component.scss']
})
export class ExcursionsEnrollSuccessComponent {

	price: number = 0;
	paymentMethod: PaymentMethod = PaymentMethod.TRADITIONAL_TRANSFER;
	excursionName: string = '';

	readonly PaymentMethod = PaymentMethod;

	constructor(
		private _router: Router
	) {
		const data = this._router.getCurrentNavigation()?.extras.state;

		if (data) {
			const payload = data as { price: number, paymentMethod: PaymentMethod, excursionName: string };
			this.price = payload.price;
			this.paymentMethod = payload.paymentMethod;
			this.excursionName = payload.excursionName;
		} else
			this._router.navigate(['']);
	}
}