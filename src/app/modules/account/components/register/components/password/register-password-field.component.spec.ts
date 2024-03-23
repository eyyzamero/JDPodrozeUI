import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPasswordFieldComponent } from './register-password-field.component';

describe('RegisterPasswordFieldComponent', () => {
    let component: RegisterPasswordFieldComponent;
    let fixture: ComponentFixture<RegisterPasswordFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterPasswordFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterPasswordFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});