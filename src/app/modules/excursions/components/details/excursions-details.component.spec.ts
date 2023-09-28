import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsDetailsComponent } from './excursions-details.component';

describe('ExcursionsDetailsComponent', () => {
	let component: ExcursionsDetailsComponent;
	let fixture: ComponentFixture<ExcursionsDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ExcursionsDetailsComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ExcursionsDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});