import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersExcursionOrderComponent } from './admin-orders-excursion-order.component';

describe('AdminOrdersExcursionOrderComponent', () => {
	let component: AdminOrdersExcursionOrderComponent;
	let fixture: ComponentFixture<AdminOrdersExcursionOrderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminOrdersExcursionOrderComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminOrdersExcursionOrderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});