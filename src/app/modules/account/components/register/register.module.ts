import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterLoginFieldComponent } from './components/login/register-login-field.component';
import { RegisterPasswordFieldComponent } from './components/password/register-password-field.component';
import { RegisterConfirmPasswordFieldComponent } from './components/confirm-password/register-confirm-password-field.component';
import { RegisterFirstNameFieldComponent } from './components/first-name/register-first-name-field.component';
import { RegisterLastNameFieldComponent } from './components/last-name/register-last-name-field.component';
import { RegisterEmailFieldComponent } from './components/email/register-email-field.component';
import { RegisterComponent } from './register.component';
import { FormControlInputComponent } from 'src/app/modules/common/controls/input/form-control-input.component';
import { FormControlErrorDirective } from 'src/app/modules/common/controls/directives';

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
        NgIf,
		FormsModule,
		ReactiveFormsModule,
        FormControlInputComponent,
        FormControlErrorDirective,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }