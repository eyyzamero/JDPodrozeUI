import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollComponent } from './excursions-enroll.component';

describe('ExcursionsEnrollComponent', () => {
	let component: ExcursionsEnrollComponent;
	let fixture: ComponentFixture<ExcursionsEnrollComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ExcursionsEnrollComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ExcursionsEnrollComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});