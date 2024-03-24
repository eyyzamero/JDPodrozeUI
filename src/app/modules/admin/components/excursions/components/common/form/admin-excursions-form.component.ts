import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminExcursionsFormService } from '../../form/services/form';
import { FormMode } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsFormModule } from './admin-excursions-form.module';

@Component({
    selector: 'app-admin-excursions-form',
    templateUrl: './admin-excursions-form.component.html',
    styleUrls: ['./admin-excursions-form.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        AdminExcursionsFormModule,
        ReactiveFormsModule
    ]
})
export class AdminExcursionsFormComponent implements OnInit {
    
    @Input() mode: FormMode = FormMode.NEW;

    @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    form: FormGroup = new FormGroup({});
    submitButtonDisabled: boolean = false;

    constructor(
        private readonly _adminExcursionsFormService: AdminExcursionsFormService,
        private readonly _toastsService: ToastsService
    ) { }

    ngOnInit(): void {
        this._initForm();
    }

    private _initForm(): void {
        this.form = this._adminExcursionsFormService.form;
    }

    onFormSubmit(): void {
        this.form.markAllAsTouched();
        this.form.valid
            ? this.submit.emit(this.form)
            : this._toastsService.show('W formularzu znajduje się co najmniej jeden błąd', 'toast-error');
    }
}