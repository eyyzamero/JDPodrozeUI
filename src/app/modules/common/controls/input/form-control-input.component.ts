import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlBase } from '../base';
import { ExtractTypescriptType, HtmlInputType } from '../types';
import { FormControlInputErrorsComponent } from './components/errors/form-control-input-errors.component';

@Component({
    selector: 'app-form-control-input',
    templateUrl: './form-control-input.component.html',
    styleUrls: ['./form-control-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,
        ReactiveFormsModule,
        FormControlInputErrorsComponent
    ]
})
export class FormControlInputComponent extends FormControlBase<ExtractTypescriptType<HtmlInputType>> {

    @Input({ required: true }) type!: HtmlInputType;

    constructor(
        readonly changeDetectorRef: ChangeDetectorRef
    ) {
        super(changeDetectorRef);
    }
}