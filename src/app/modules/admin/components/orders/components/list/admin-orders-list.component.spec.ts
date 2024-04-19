import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersListComponent } from './admin-orders-list.component';

describe('AdminOrdersListComponent', () => {
    let component: AdminOrdersListComponent;
    let fixture: ComponentFixture<AdminOrdersListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersListComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});