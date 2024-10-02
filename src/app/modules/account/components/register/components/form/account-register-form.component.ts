import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTimeValidator } from 'src/app/core/validators';
import { IsLoginAvailableValidator, passwordsEqualValidator } from '../../validators';
import { AuthHttpService } from 'src/app/core/services';
import { getControl } from 'src/app/core/helpers';
import { AccountRegisterFormModule } from './account-register-form.module';
import { LoadingState } from 'src/app/core/enums';

@Component({
    selector: 'app-account-register-form',
    templateUrl: './account-register-form.component.html',
    styleUrls: ['./account-register-form.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        AccountRegisterFormModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRegisterFormComponent {

    @Input() error: boolean = false;
    @Input() loadingState: LoadingState = LoadingState.LOADED;
    @Input() submitBtnText: string = "Zarejestruj";
    @Input() showNavigateToHomePageBtn: boolean = true;
    @Input() set alreadyExistingLogin(value: string) {
        this.form.controls['login'].clearAsyncValidators();
        this.form.controls['login'].setAsyncValidators(
            debounceTimeValidator(IsLoginAvailableValidator.createValidator(this._authHttpService, this._changeDetectorRef, value), 500) 
        );
    };

    @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() navigateToHomePage: EventEmitter<void> = new EventEmitter<void>();

    form: FormGroup = new FormGroup({
        id: new FormControl(null),
		login: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(50),
            ],
            asyncValidators: [
                debounceTimeValidator(IsLoginAvailableValidator.createValidator(this._authHttpService, this._changeDetectorRef), 500) 
            ]
        }),
		password: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(255)
            ]
        }),
		confirmPassword: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(255),
                passwordsEqualValidator
            ]
        }),
		firstName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ]
        }),
		lastName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ]
        }),
		email: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(255)
            ]
        })
	});

    readonly LoadingState = LoadingState;

    constructor(
        private readonly _authHttpService: AuthHttpService,
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) { }

    getFormControl(controlName: string): FormControl {
        return getControl<FormControl>(this.form, controlName);
    }

    onSubmit() {
        this.submit.emit(this.form);
    }
}