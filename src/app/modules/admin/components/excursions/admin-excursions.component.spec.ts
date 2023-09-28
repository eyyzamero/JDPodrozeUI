import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsComponent } from './admin-excursions.component';

describe('AdminExcursionsComponent', () => {
	let component: AdminExcursionsComponent;
	let fixture: ComponentFixture<AdminExcursionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminExcursionsComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminExcursionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});