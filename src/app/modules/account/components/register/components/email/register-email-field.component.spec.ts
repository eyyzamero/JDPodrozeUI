import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmailFieldComponent } from './register-email-field.component';

describe('RegisterEmailFieldComponent', () => {
    let component: RegisterEmailFieldComponent;
    let fixture: ComponentFixture<RegisterEmailFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterEmailFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterEmailFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});