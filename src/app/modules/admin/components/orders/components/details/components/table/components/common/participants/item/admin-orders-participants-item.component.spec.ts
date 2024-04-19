import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersParticipantComponent } from './admin-orders-participants-item.component';

describe('AdminOrdersParticipantComponent', () => {
    let component: AdminOrdersParticipantComponent;
    let fixture: ComponentFixture<AdminOrdersParticipantComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOrdersParticipantComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersParticipantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});