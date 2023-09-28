import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersExcursionComponent } from './admin-orders-excursion.component';

describe('AdminOrdersExcursionComponent', () => {
	let component: AdminOrdersExcursionComponent;
	let fixture: ComponentFixture<AdminOrdersExcursionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminOrdersExcursionComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminOrdersExcursionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});