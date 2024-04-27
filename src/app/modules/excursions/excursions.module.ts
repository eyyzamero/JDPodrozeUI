import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './excursions-routing.module';
import { ExcursionsComponent } from '../excursions/excursions.component';

@NgModule({
	declarations: [
		ExcursionsComponent
	],
	imports: [
		CommonModule,
		ExcursionsRoutingModule
	]
})
export class ExcursionsModule { }