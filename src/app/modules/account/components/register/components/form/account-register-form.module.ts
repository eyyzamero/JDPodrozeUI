import { NgModule } from "@angular/core";
import { FormControlErrorDirective } from "src/app/modules/common/controls/directives";
import { FormControlInputComponent } from "src/app/modules/common/controls/input/form-control-input.component";
import { AccountRegisterConfirmPasswordFieldComponent } from "./components/confirm-password/account-register-confirm-password-field.component";
import { AccountRegisterEmailFieldComponent } from "./components/email/account-register-email-field.component";
import { AccountRegisterFirstNameFieldComponent } from "./components/first-name/account-register-first-name-field.component";
import { AccountRegisterLastNameFieldComponent } from "./components/last-name/account-register-last-name-field.component";
import { AccountRegisterLoginFieldComponent } from "./components/login/account-register-login-field.component";
import { AccountRegisterPasswordFieldComponent } from "./components/password/account-register-password-field.component";
import { NgIf } from "@angular/common";

@NgModule({
    declarations: [
        AccountRegisterConfirmPasswordFieldComponent,
        AccountRegisterEmailFieldComponent,
        AccountRegisterFirstNameFieldComponent,
        AccountRegisterLastNameFieldComponent,
        AccountRegisterLoginFieldComponent,
        AccountRegisterPasswordFieldComponent
    ],
    imports: [
        NgIf,
        FormControlInputComponent,
        FormControlErrorDirective
    ],
    exports: [
        AccountRegisterConfirmPasswordFieldComponent,
        AccountRegisterEmailFieldComponent,
        AccountRegisterFirstNameFieldComponent,
        AccountRegisterLastNameFieldComponent,
        AccountRegisterLoginFieldComponent,
        AccountRegisterPasswordFieldComponent
    ]
})
export class AccountRegisterFormModule { }