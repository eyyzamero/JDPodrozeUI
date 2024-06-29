import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsHomeListItemComponent } from './excursions-home-list-item.component';

describe('ExcursionsHomeListItemComponent', () => {
    let component: ExcursionsHomeListItemComponent;
    let fixture: ComponentFixture<ExcursionsHomeListItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsHomeListItemComponent]
        });
        fixture = TestBed.createComponent(ExcursionsHomeListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});