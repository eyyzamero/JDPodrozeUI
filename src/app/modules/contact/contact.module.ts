import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '../common/loading-spinner/loading-spinner.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingSpinnerModule,
		AngularSvgIconModule,
		ContactRoutingModule
	]
})
export class ContactModule { }