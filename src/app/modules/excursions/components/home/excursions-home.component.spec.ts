import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsHomeComponent } from './excursions-home.component';

describe('ExcursionsHomeComponent', () => {
    let component: ExcursionsHomeComponent;
    let fixture: ComponentFixture<ExcursionsHomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsHomeComponent]
        });
        fixture = TestBed.createComponent(ExcursionsHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});