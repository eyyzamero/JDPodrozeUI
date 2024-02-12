import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '../common/loading-spinner/loading-spinner.module';

@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingSpinnerModule,
		ContactRoutingModule
	]
})
export class ContactModule { }