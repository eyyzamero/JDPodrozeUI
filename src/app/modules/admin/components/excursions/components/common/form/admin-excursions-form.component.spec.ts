import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormComponent } from './admin-excursions-form.component';

describe('AdminExcursionsFormComponent', () => {
    let component: AdminExcursionsFormComponent;
    let fixture: ComponentFixture<AdminExcursionsFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminExcursionsFormComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});