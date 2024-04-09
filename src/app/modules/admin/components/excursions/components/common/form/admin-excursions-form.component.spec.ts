import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormCommonComponent } from './admin-excursions-form.component';

describe('AdminExcursionsFormCommonComponent', () => {
    let component: AdminExcursionsFormCommonComponent;
    let fixture: ComponentFixture<AdminExcursionsFormCommonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminExcursionsFormCommonComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsFormCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});