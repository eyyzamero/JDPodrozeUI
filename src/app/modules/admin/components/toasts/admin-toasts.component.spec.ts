import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToastsComponent } from './admin-toasts.component';

describe('AdminToastsComponent', () => {
	let component: AdminToastsComponent;
	let fixture: ComponentFixture<AdminToastsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminToastsComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminToastsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});