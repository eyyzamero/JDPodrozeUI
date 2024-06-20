import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlInputErrorsComponent } from './form-control-input-errors.component';

describe('FormControlInputErrorsComponent', () => {
    let component: FormControlInputErrorsComponent;
    let fixture: ComponentFixture<FormControlInputErrorsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormControlInputErrorsComponent]
        });
        fixture = TestBed.createComponent(FormControlInputErrorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});