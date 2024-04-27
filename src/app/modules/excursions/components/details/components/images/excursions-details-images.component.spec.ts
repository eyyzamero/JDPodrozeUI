import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsDetailsImagesComponent } from './excursions-details-images.component';

describe('ExcursionsDetailsImagesComponent', () => {
    let component: ExcursionsDetailsImagesComponent;
    let fixture: ComponentFixture<ExcursionsDetailsImagesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExcursionsDetailsImagesComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsDetailsImagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});