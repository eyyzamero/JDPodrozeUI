import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLoginFieldComponent } from './components/login/login-login-field.component';
import { LoginPasswordFieldComponent } from './components/password/login-password-field.component';

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
        LoginRoutingModule
    ]
})
export class LoginModule { }