import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormPickupPointsComponent } from './admin-excursions-form-pickup-points.component';

describe('AdminExcursionsFormPickupPointsComponent', () => {
    let component: AdminExcursionsFormPickupPointsComponent;
    let fixture: ComponentFixture<AdminExcursionsFormPickupPointsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionsFormPickupPointsComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsFormPickupPointsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});