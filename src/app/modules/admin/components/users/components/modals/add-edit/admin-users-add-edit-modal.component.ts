import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterFormComponent } from 'src/app/modules/account/components/register/components/form/account-register-form.component';
import { IAdminUsersListUserModel } from '../../../models';
import { AdminUsersHttpService, AdminUsersListDataService, AdminUsersMapperService } from '../../../services';
import { FormMode } from 'src/app/core/enums';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';

@Component({
    selector: 'app-admin-users-add-edit-modal',
    templateUrl: './admin-users-add-edit-modal.component.html',
    styleUrls: ['./admin-users-add-edit-modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        AccountRegisterFormComponent
    ]
})
export class AdminUsersAddEditModalComponent {

    @ViewChild(AccountRegisterFormComponent) private _accountRegisterFormComponentRef?: AccountRegisterFormComponent;

    @Input() set user(value: IAdminUsersListUserModel) {
        this._setForm(value);
    }

    formMode: FormMode = FormMode.NEW;

    readonly FormMode = FormMode;

    constructor(
        private readonly _ngbModalService: NgbModal,
        private readonly _adminUsersMapperService: AdminUsersMapperService,
        private readonly _adminUsersListDataService: AdminUsersListDataService,
        private readonly _adminUsersHttpService: AdminUsersHttpService
    ) { }

    onSubmit(form: FormGroup): void {
        if (form.valid) {
            const req = this._adminUsersMapperService.formGroupToIAccountAddOrEditReq(form);
            this._adminUsersHttpService.addOrEditObservable(req).pipe(
                take(1)
            ).subscribe({
                next: (id) => {
                    req.id = !req.id ? (id ?? undefined) : req.id;
                    const user = this._adminUsersMapperService.IAccountAddOrEditReqToIAdminUsersListUserModel(req);
                    id ? this._adminUsersListDataService.addUser(user) : this._adminUsersListDataService.editUser(user);
                    this.close();
                },
                error: (error) => this._adminUsersListDataService.addError(error)
            });
        };
    }

    close(): void {
        this._ngbModalService.dismissAll();
    }

    private _setForm(user: IAdminUsersListUserModel): void {
        this.formMode = FormMode.EDIT;
        setTimeout(() => {
            if (this._accountRegisterFormComponentRef) {
                this._accountRegisterFormComponentRef.alreadyExistingLogin = user.login;
                this._adminUsersMapperService.iAdminUsersListUserModelToFormGroup(user, this._accountRegisterFormComponentRef.form);
                this._accountRegisterFormComponentRef.form.controls['id'].setValue(user.id);
                this._accountRegisterFormComponentRef.form.controls['password'].clearValidators();
                this._accountRegisterFormComponentRef.form.controls['password'].updateValueAndValidity()
                this._accountRegisterFormComponentRef.form.controls['confirmPassword'].clearValidators();
                this._accountRegisterFormComponentRef.form.controls['confirmPassword'].updateValueAndValidity();
            }
        });
    }
}