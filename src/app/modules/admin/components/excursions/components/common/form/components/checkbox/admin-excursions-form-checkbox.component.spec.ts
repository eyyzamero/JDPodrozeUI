import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormCheckboxComponent } from './admin-excursions-form-checkbox.component';

describe('AdminExcursionsFormCheckboxComponent', () => {
    let component: AdminExcursionsFormCheckboxComponent;
    let fixture: ComponentFixture<AdminExcursionsFormCheckboxComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionsFormCheckboxComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsFormCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});