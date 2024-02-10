import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsCarouselComponent } from './excursions-carousel.component';

describe('ExcursionsCarouselComponent', () => {
	let component: ExcursionsCarouselComponent;
	let fixture: ComponentFixture<ExcursionsCarouselComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ExcursionsCarouselComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ExcursionsCarouselComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});