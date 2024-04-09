import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplatesFormComponent } from './admin-templates-form.component';

describe('AdminTemplatesFormComponent', () => {
	let component: AdminTemplatesFormComponent;
	let fixture: ComponentFixture<AdminTemplatesFormComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [AdminTemplatesFormComponent]
		});
		fixture = TestBed.createComponent(AdminTemplatesFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});