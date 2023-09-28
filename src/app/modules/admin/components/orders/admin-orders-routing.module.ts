import { RouterModule, Routes } from "@angular/router";
import { AdminOrdersComponent } from "./admin-orders.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
	{
		path: '',
		component: AdminOrdersComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminOrdersRoutingModule { }