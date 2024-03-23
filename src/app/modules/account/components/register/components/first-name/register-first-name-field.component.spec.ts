import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFirstNameFieldComponent } from './register-first-name-field.component';

describe('RegisterFirstNameFieldComponent', () => {
    let component: RegisterFirstNameFieldComponent;
    let fixture: ComponentFixture<RegisterFirstNameFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterFirstNameFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterFirstNameFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});