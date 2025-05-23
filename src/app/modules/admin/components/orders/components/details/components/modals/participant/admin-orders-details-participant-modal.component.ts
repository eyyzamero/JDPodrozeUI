import { Component, Input, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, FormMode, LoadingState } from 'src/app/core/enums';
import { ExcursionsEnrollFormParticipantComponent } from 'src/app/modules/excursions/components/common/enroll-form/components/participant/excursions-enroll-form-participant.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { ExcursionsEnrollForm } from 'src/app/modules/excursions/components/common/enroll-form/static';
import { AdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel, IAdminOrdersExcursionDetailsPickupPointModel } from '../../../../../models';
import { ExcursionsMapperService } from 'src/app/modules/excursions/services/mapper/excursions-mapper.service';
import { AdminOrdersHttpService } from '../../../../../services/http/admin-orders-http.service';
import { AdminOrdersMapperService } from '../../../../../services/mapper/admin-orders-mapper.service';
import { AdminOrdersDetailsDataService } from '../../../../../services/data/details/admin-orders-details-data.service';

@Component({
    selector: 'app-admin-orders-details-participant-modal',
    templateUrl: './admin-orders-details-participant-modal.component.html',
    styleUrls: ['./admin-orders-details-participant-modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ExcursionsEnrollFormParticipantComponent,
        LoadingSpinnerModule
    ],
})
export class AdminOrdersDetailsParticipantModalComponent {

    @Input() mode: FormMode = FormMode.NEW;
    @Input() order: IAdminOrdersExcursionDetailsOrderModel = new AdminOrdersExcursionDetailsOrderModel();
    @Input() set participant(value: IAdminOrdersExcursionDetailsParticipantModel) {
        this.participantId = value.id;
        this._excursionsMapperService.iAdminOrdersExcursionDetailsParticipantModelToParticipantFormGroup(value, this.form);
        this.mode = FormMode.EDIT;
    }
    @Input() discount: boolean = false;
    @Input() pickupPoints: IAdminOrdersExcursionDetailsPickupPointModel[] = [];
    
    form: FormGroup = ExcursionsEnrollForm.getParticipantForm();
    participantId?: number;
    loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);

    readonly FormMode = FormMode;
    readonly LoadingState = LoadingState;
    readonly Color = Color;

    constructor(
        private readonly _excursionsMapperService: ExcursionsMapperService,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService,
        private readonly _ngbActiveModal: NgbActiveModal,
        private readonly _adminOrdersMapperService: AdminOrdersMapperService,
        private readonly _adminOrdersDetailsDataService: AdminOrdersDetailsDataService
    ) { }

    onCancel(): void {
        this._ngbActiveModal.close(false);
    }

    onSubmit(): void {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();

        if (this.form.valid && this.loadingState() !== LoadingState.LOADING) {
            this.loadingState.set(LoadingState.LOADING);
            const req = this._excursionsMapperService.participantFormGroupToIOrderParticipantAddOrEditReq(this.form, this.order, this.participantId);
            this._adminOrdersHttpService.addOrEditParticipantObservable(req).subscribe({
                next: (participantId) => {
                    const participant = this._adminOrdersMapperService.iOrderParticipantAddOrEditReqToAdminOrdersExcursionDetailsParticipantModel(req, participantId);
                    
                    participantId
                        ? this._adminOrdersDetailsDataService.addParticipant(participant, req.orderId)
                        : this._adminOrdersDetailsDataService.editParticipant(participant, req.orderId);

                    this._ngbActiveModal.close(true);
                },
                error: () => {
                    this.loadingState.set(LoadingState.LOADED);
                }
            });
        }
    }
}