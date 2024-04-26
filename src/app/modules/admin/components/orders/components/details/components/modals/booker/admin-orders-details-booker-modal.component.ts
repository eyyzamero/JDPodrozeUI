import { Component, Input, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, FormMode, LoadingState } from 'src/app/core/enums';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { ExcursionsEnrollForm } from 'src/app/modules/excursions/components/common/enroll-form/static';
import { ExcursionsEnrollFormBookerComponent } from 'src/app/modules/excursions/components/common/enroll-form/components/booker/excursions-enroll-form-booker.component';
import { ExcursionsMapperService } from 'src/app/modules/excursions/services/mapper/excursions-mapper.service';
import { AdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from '../../../../../models';
import { AdminOrdersHttpService } from '../../../../../services/http/admin-orders-http.service';

@Component({
    selector: 'app-admin-orders-details-booker-modal',
    templateUrl: './admin-orders-details-booker-modal.component.html',
    styleUrls: ['./admin-orders-details-booker-modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ExcursionsEnrollFormBookerComponent,
        LoadingSpinnerModule
    ],
})
export class AdminOrdersDetailsBookerModalComponent {

    @Input() mode: FormMode = FormMode.NEW;
    @Input() order: IAdminOrdersExcursionDetailsOrderModel = new AdminOrdersExcursionDetailsOrderModel();
    @Input() set participant(value: IAdminOrdersExcursionDetailsParticipantModel) {
        this._excursionsMapperService.iAdminOrdersExcursionDetailsParticipantModelToBookerFormGroup(value, this.form);
        this.mode = FormMode.EDIT;
    }
    @Input() discount: boolean = false;
    
    form: FormGroup = ExcursionsEnrollForm.getBookerForm();
    loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);

    readonly FormMode = FormMode;
    readonly LoadingState = LoadingState;
    readonly Color = Color;

    constructor(
        private readonly _excursionsMapperService: ExcursionsMapperService,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService,
        private readonly _ngbActiveModal: NgbActiveModal,
    ) { }

    onCancel(): void {
        this._ngbActiveModal.close(false);
    }

    onSubmit(): void {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();

        if (this.form.valid && this.loadingState() !== LoadingState.LOADING) {
            this.loadingState.set(LoadingState.LOADING);
            const req = this._excursionsMapperService.bookerFormGroupToIOrderParticipantAddOrEditReq(this.form, this.order);
            this._adminOrdersHttpService.addOrEditParticipant(req);
        }
    }
}