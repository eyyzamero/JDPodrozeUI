import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersExcursionOrderParticipantComponent } from './admin-orders-excursion-order-participant.component';

describe('AdminOrdersExcursionOrderParticipantComponent', () => {
	let component: AdminOrdersExcursionOrderParticipantComponent;
	let fixture: ComponentFixture<AdminOrdersExcursionOrderParticipantComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminOrdersExcursionOrderParticipantComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminOrdersExcursionOrderParticipantComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});