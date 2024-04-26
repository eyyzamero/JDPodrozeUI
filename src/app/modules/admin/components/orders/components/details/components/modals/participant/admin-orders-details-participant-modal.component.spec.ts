import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsParticipantModalComponent } from './admin-orders-details-participant-modal.component';

describe('AdminOrdersDetailsParticipantModalComponent', () => {
    let component: AdminOrdersDetailsParticipantModalComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsParticipantModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersDetailsParticipantModalComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsParticipantModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});