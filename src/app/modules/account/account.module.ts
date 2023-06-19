import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from '../account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AccountComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AccountRoutingModule
	]
})
export class AccountModule { }