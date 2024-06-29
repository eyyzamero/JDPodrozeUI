import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsHomeCarouselComponent } from './excursions-home-carousel.component';

describe('ExcursionsHomeCarouselComponent', () => {
    let component: ExcursionsHomeCarouselComponent;
    let fixture: ComponentFixture<ExcursionsHomeCarouselComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsHomeCarouselComponent]
        });
        fixture = TestBed.createComponent(ExcursionsHomeCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});