import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsHomeListComponent } from './excursions-home-list.component';

describe('ExcursionsHomeListComponent', () => {
    let component: ExcursionsHomeListComponent;
    let fixture: ComponentFixture<ExcursionsHomeListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsHomeListComponent]
        });
        fixture = TestBed.createComponent(ExcursionsHomeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});