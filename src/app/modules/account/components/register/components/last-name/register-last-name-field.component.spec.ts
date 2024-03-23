import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLastNameFieldComponent } from './register-last-name-field.component';

describe('RegisterLastNameFieldComponent', () => {
    let component: RegisterLastNameFieldComponent;
    let fixture: ComponentFixture<RegisterLastNameFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterLastNameFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterLastNameFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});