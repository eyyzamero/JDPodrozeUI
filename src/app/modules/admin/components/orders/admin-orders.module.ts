import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { AdminOrdersComponent } from './admin-orders.component';
import { AdminOrdersExcursionComponent } from './components/excursion/admin-orders-excursion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminOrdersExcursionOrderComponent } from './components/excursion/components/order/admin-orders-excursion-order.component';
import { AdminOrdersExcursionOrderParticipantComponent } from './components/excursion/components/order/components/participant/admin-orders-excursion-order-participant.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';

@NgModule({
	declarations: [
		AdminOrdersComponent,
		AdminOrdersExcursionOrderComponent,
		AdminOrdersExcursionComponent,
 		AdminOrdersExcursionOrderParticipantComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		LoadingSpinnerModule,
		AdminOrdersRoutingModule
	]
})
export class AdminOrdersModule { }