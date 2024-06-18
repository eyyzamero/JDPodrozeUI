import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLoginFieldComponent } from './components/login/login-login-field.component';
import { LoginPasswordFieldComponent } from './components/password/login-password-field.component';
import { FormControlInputComponent } from 'src/app/modules/common/controls/input/form-control-input.component';
import { FormControlErrorDirective } from 'src/app/modules/common/controls/directives';

@NgModule({
    declarations: [
        LoginComponent,
        LoginLoginFieldComponent,
        LoginPasswordFieldComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
        FormControlInputComponent,
        FormControlErrorDirective,
        LoginRoutingModule
    ]
})
export class LoginModule { }