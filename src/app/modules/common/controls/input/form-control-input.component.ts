import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlBase } from '../base';
import { ExtractTypescriptType, HtmlInputType } from '../types';

@Component({
    selector: 'app-form-control-input',
    templateUrl: './form-control-input.component.html',
    styleUrls: ['./form-control-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
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