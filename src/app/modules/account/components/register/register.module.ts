import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterLoginFieldComponent } from './components/login/register-login-field.component';
import { RegisterPasswordFieldComponent } from './components/password/register-password-field.component';
import { RegisterConfirmPasswordFieldComponent } from './components/confirm-password/register-confirm-password-field.component';
import { RegisterFirstNameFieldComponent } from './components/first-name/register-first-name-field.component';
import { RegisterLastNameFieldComponent } from './components/last-name/register-last-name-field.component';
import { RegisterEmailFieldComponent } from './components/email/register-email-field.component';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        RegisterLoginFieldComponent,
        RegisterPasswordFieldComponent,
        RegisterConfirmPasswordFieldComponent,
        RegisterFirstNameFieldComponent,
        RegisterLastNameFieldComponent,
        RegisterEmailFieldComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
		FormsModule,
		ReactiveFormsModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }