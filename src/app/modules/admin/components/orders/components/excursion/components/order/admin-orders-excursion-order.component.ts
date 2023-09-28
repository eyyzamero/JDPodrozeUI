import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { AdminOrdersExcursionOrderModel, IAdminOrdersExcursionOrderModel, IAdminOrdersExcursionOrderParticipantModel } from '../../../../models';
import { Color, LoadingState, PaymentMethod, PaymentStatus } from 'src/app/core/enums';
import { AdminOrdersHttpService } from '../../../../services/http/admin-orders-http.service';
import { IOrdersChangePaymentStatusReq, OrdersChangePaymentStatusReq } from 'src/app/core/contracts';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin-orders-excursion-order',
	templateUrl: './admin-orders-excursion-order.component.html',
	styleUrls: ['./admin-orders-excursion-order.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersExcursionOrderComponent implements OnDestroy {

	@Input() order: IAdminOrdersExcursionOrderModel = new AdminOrdersExcursionOrderModel();

	get booker(): IAdminOrdersExcursionOrderParticipantModel | undefined {
		return this.order.participants.find(x => x.id === this.order.bookerId);
	}
	
	isCollapsed: boolean = true;
	loadingState: LoadingState = LoadingState.LOADED; 

	readonly PaymentStatus = PaymentStatus;
	readonly PaymentMethod = PaymentMethod;
	readonly LoadingState = LoadingState;
	readonly Color = Color;
	
	private _subscriptions: Subscription[] = [];
	
	constructor(
		private _adminOrdersHttpService: AdminOrdersHttpService,
		private _changeDetectorRef: ChangeDetectorRef 
	) { }

	changeStatus() {
		if (this.loadingState === LoadingState.LOADED) {
			const paymentStatus = this.order.paymentStatus === PaymentStatus.NOT_PAID ? PaymentStatus.PAID : PaymentStatus.NOT_PAID;
			const request: IOrdersChangePaymentStatusReq = new OrdersChangePaymentStatusReq(paymentStatus);
			this.loadingState = LoadingState.LOADING;
			this._subscriptions.push(
				this._adminOrdersHttpService.changePaymentStatusObservable(this.order.orderId, request).subscribe({
					next: () => {
						this.order.paymentStatus = paymentStatus;
						this.loadingState = LoadingState.LOADED;
						this._changeDetectorRef.markForCheck();
					},
					error: () => {
						this.loadingState = LoadingState.ERROR;
						this._changeDetectorRef.markForCheck();
					}
				})
			);
		};
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}