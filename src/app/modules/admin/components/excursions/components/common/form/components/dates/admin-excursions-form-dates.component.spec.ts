import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormDatesComponent } from './admin-excursions-form-dates.component';

describe('AdminExcursionsFormDatesComponent', () => {
	let component: AdminExcursionsFormDatesComponent;
	let fixture: ComponentFixture<AdminExcursionsFormDatesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminExcursionsFormDatesComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminExcursionsFormDatesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});