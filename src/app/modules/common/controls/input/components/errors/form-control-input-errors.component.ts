import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-form-control-input-errors',
    templateUrl: './form-control-input-errors.component.html',
    styleUrls: ['./form-control-input-errors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf
    ]
})
export class FormControlInputErrorsComponent {

    @Input() errors: ValidationErrors | null = null;
    @Input() touched: boolean = false;

    constructor() { }
}