import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './components/menu/admin-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminToastsComponent } from './components/toasts/admin-toasts.component';

@NgModule({
	declarations: [
		AdminComponent,
		AdminMenuComponent,
		AdminToastsComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		AdminRoutingModule
	]
})
export class AdminModule { }