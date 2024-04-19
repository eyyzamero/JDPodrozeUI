import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { Color, LoadingState } from 'src/app/core/enums';
import { ExcursionsHttpClientService } from 'src/app/core/services';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ExcursionsEnrollFormComponent } from 'src/app/modules/excursions/components/common/enroll-form/excursions-enroll-form.component';
import { ExcursionsMapperService } from 'src/app/modules/excursions/services/mapper/excursions-mapper.service';

@Component({
    selector: 'app-admin-orders-details-enroll-modal',
    templateUrl: './admin-orders-details-enroll-modal.component.html',
    styleUrls: ['./admin-orders-details-enroll-modal.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ExcursionsEnrollFormComponent,
        LoadingSpinnerModule
    ]
})
export class AdminOrdersDetailsEnrollModalComponent {

    @Input({ required: true }) excursionId!: number;

    loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);

    readonly LoadingState = LoadingState;
    readonly Color = Color;

    constructor(
        private readonly _excursionsMapperService: ExcursionsMapperService,
        private readonly _excursionsHttpClientService: ExcursionsHttpClientService,
        private readonly _ngbActiveModal: NgbActiveModal
    ) { }

    onCancel(): void {
        this._ngbActiveModal.close(false);
    }

    onSubmit(form: FormGroup): void {
        form.markAllAsTouched();
        form.updateValueAndValidity();

        if (form.valid && this.loadingState() !== LoadingState.LOADING) {
            this.loadingState.set(LoadingState.LOADING);
            const req = this._excursionsMapperService.enrollFormGroupToIExcursionsEnrollReqNew(form, this.excursionId);
            this._excursionsHttpClientService.enroll(req).pipe(
                take(1)
            ).subscribe({
                next: () => {
                    this.loadingState.set(LoadingState.LOADED);
                    this._ngbActiveModal.close(true);
                },
                error: () => this.loadingState.set(LoadingState.ERROR)
            });
        };
    }
}