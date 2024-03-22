import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsTableFiltersActiveComponent } from './admin-excursions-table-filters-active.component';

describe('AdminExcursionsTableFiltersActiveComponent', () => {
    let component: AdminExcursionsTableFiltersActiveComponent;
    let fixture: ComponentFixture<AdminExcursionsTableFiltersActiveComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionsTableFiltersActiveComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsTableFiltersActiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});