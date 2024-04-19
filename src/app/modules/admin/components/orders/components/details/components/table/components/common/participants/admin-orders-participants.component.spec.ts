import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersParticipantsComponent } from './admin-orders-participants.component';

describe('AdminOrdersParticipantsComponent', () => {
    let component: AdminOrdersParticipantsComponent;
    let fixture: ComponentFixture<AdminOrdersParticipantsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOrdersParticipantsComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersParticipantsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});