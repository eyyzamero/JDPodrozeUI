import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVersionAndCopyrightComponent } from './footer-version-and-copyright.component';

describe('FooterVersionAndCopyrightComponent', () => {
	let component: FooterVersionAndCopyrightComponent;
	let fixture: ComponentFixture<FooterVersionAndCopyrightComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterVersionAndCopyrightComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(FooterVersionAndCopyrightComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});