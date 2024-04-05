import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsTableViewComponent } from './admin-excursions-table-view.component';

describe('AdminExcursionsTableViewComponent', () => {
    let component: AdminExcursionsTableViewComponent;
    let fixture: ComponentFixture<AdminExcursionsTableViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionsTableViewComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsTableViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});