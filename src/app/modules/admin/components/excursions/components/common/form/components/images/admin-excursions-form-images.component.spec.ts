import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormImagesComponent } from './admin-excursions-form-images.component';

describe('AdminExcursionsFormImagesComponent', () => {
	let component: AdminExcursionsFormImagesComponent;
	let fixture: ComponentFixture<AdminExcursionsFormImagesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminExcursionsFormImagesComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminExcursionsFormImagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});