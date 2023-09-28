import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormEditorComponent } from './admin-excursions-form-editor.component';

describe('AdminExcursionsFormEditorComponent', () => {
	let component: AdminExcursionsFormEditorComponent;
	let fixture: ComponentFixture<AdminExcursionsFormEditorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AdminExcursionsFormEditorComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AdminExcursionsFormEditorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});