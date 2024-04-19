import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersListFiltersComponent } from './admin-orders-list-filters.component';

describe('AdminOrdersListFiltersComponent', () => {
    let component: AdminOrdersListFiltersComponent;
    let fixture: ComponentFixture<AdminOrdersListFiltersComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersListFiltersComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersListFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});