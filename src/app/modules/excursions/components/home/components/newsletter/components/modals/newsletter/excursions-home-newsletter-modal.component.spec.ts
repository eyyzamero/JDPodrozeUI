import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsHomeNewsletterModalComponent } from './excursions-home-newsletter-modal.component';

describe('ExcursionsHomeNewsletterModalComponent', () => {
    let component: ExcursionsHomeNewsletterModalComponent;
    let fixture: ComponentFixture<ExcursionsHomeNewsletterModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ExcursionsHomeNewsletterModalComponent]
        });
        fixture = TestBed.createComponent(ExcursionsHomeNewsletterModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});