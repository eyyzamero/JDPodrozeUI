import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';
import { AccountRegisterFormComponent } from "./components/form/account-register-form.component";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        NgIf,
        AccountRegisterFormComponent,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }