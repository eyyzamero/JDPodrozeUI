import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlInputComponent } from 'src/app/modules/common/controls/input/form-control-input.component';
import { getControl } from 'src/app/core/helpers';
import { NewsletterEnrollReq } from 'src/app/core/contracts';
import { Color, LoadingState } from 'src/app/core/enums';
import { take } from 'rxjs';
import { ExcursionsHomeNewsletterHttpService } from '../../../services/http/excursions-home-newsletter-http.service';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { NgClass, NgIf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-excursions-home-newsletter-modal',
    templateUrl: './excursions-home-newsletter-modal.component.html',
    styleUrls: ['./excursions-home-newsletter-modal.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        ReactiveFormsModule,
        FormControlInputComponent,
        LoadingSpinnerModule
    ]
})
export class ExcursionsHomeNewsletterModalComponent {

    form: FormGroup = new FormGroup({
        name: new FormControl(null, [
            Validators.required,
            Validators.maxLength(50)
        ]),
        email: new FormControl(null, [
            Validators.required,
            Validators.email,
            Validators.maxLength(150)
        ])
    });
    loadingState: LoadingState = LoadingState.LOADED;
    success: boolean = false;

	readonly Color = Color;
	readonly LoadingState = LoadingState;

    constructor(
        private readonly _excursionsHomeNewsletterHttpService: ExcursionsHomeNewsletterHttpService,
        private readonly _ngbModal: NgbModal
    ) { }

    getControl(controlName: string): FormControl {
        return getControl(this.form, controlName);
    }

    cancel(): void {
        this._ngbModal.dismissAll();
    }

    enroll(): void {
        if (this.form.valid) {
            const req = new NewsletterEnrollReq(
                this.form.controls['name'].value,
                this.form.controls['email'].value
            );
            this.loadingState = LoadingState.LOADING;
            this.form.disable();
            this._excursionsHomeNewsletterHttpService.enroll(req).pipe(
                take(1)
            ).subscribe({
                next: () => {
                    this.success = true;
                    this.loadingState = LoadingState.LOADED;
                },
                error: () => {
                    this.loadingState = LoadingState.ERROR;
                    this.form.enable();
                }
            })
        }
    }
}