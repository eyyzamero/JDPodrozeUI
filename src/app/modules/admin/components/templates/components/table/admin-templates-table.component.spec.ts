import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplatesTableComponent } from './admin-templates-table.component';

describe('AdminTemplatesTableComponent', () => {
    let component: AdminTemplatesTableComponent;
    let fixture: ComponentFixture<AdminTemplatesTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminTemplatesTableComponent]
        });
        fixture = TestBed.createComponent(AdminTemplatesTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});