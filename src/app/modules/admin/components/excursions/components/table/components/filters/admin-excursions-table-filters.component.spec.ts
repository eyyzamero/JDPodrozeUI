import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsTableFiltersComponent } from './admin-excursions-table-filters.component';

describe('AdminExcursionsTableFiltersComponent', () => {
    let component: AdminExcursionsTableFiltersComponent;
    let fixture: ComponentFixture<AdminExcursionsTableFiltersComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionsTableFiltersComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionsTableFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});