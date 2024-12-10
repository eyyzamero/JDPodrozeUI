import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionsHomeCarouselComponent } from './excursions-home-carousel.component';
import { ExcursionsDataService } from 'src/app/modules/excursions/services/data/excursions-data.service';
import { ExcursionsMapperService } from 'src/app/modules/excursions/services/mapper/excursions-mapper.service';
import { Subject } from 'rxjs';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { IExcursionsCarouselItemModel } from '../../../common/carousel/models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ExcursionsHomeCarouselComponent', () => {
    let component: ExcursionsHomeCarouselComponent;
    let fixture: ComponentFixture<ExcursionsHomeCarouselComponent>;
    let mockExcursionsDataService: jasmine.SpyObj<ExcursionsDataService>;
    let mockExcursionsMapperService: jasmine.SpyObj<ExcursionsMapperService>;
    let excursionsSubject: Subject<{ data: IExcursionModel[] }>;

    beforeEach(async () => {
        excursionsSubject = new Subject();

        mockExcursionsDataService = jasmine.createSpyObj('ExcursionsDataService', [], {
            observable: excursionsSubject.asObservable()
        });

        mockExcursionsMapperService = jasmine.createSpyObj('ExcursionsMapperService', ['arrayOfIExcursionModelToArrayOfIExcursionsCarouselItemModel']);

        await TestBed.configureTestingModule({
            declarations: [ExcursionsHomeCarouselComponent],
            providers: [
                { provide: ExcursionsDataService, useValue: mockExcursionsDataService },
                { provide: ExcursionsMapperService, useValue: mockExcursionsMapperService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsHomeCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should subscribe to ExcursionsDataService and map excursions on initialization', () => {
        const excursions: IExcursionModel[] = [
            { id: 1, title: 'Excursion 1', shortDescription: '', description: '', active: true, inCarousel: true, priceGross: 100, priceNet: 80, discount: false, discountPrice: 0, seats: 10, availableSeats: 5, imageId: 101, images: [] }
        ];
        const mappedItems: IExcursionsCarouselItemModel[] = [
            { id: 1, excursionId: 1, title: 'Excursion 1', description: '', loaded: true }
        ];

        mockExcursionsMapperService.arrayOfIExcursionModelToArrayOfIExcursionsCarouselItemModel.and.returnValue(mappedItems);

        excursionsSubject.next({ data: excursions });

        expect(component.excursions).toEqual(excursions);
        expect(component.carouselItems).toEqual(mappedItems);
        expect(mockExcursionsMapperService.arrayOfIExcursionModelToArrayOfIExcursionsCarouselItemModel).toHaveBeenCalledWith(excursions);
    });

    it('Should unsubscribe from all subscriptions on destroy', () => {
        spyOn(component['_subscriptions'][0], 'unsubscribe');

        component.ngOnDestroy();

        expect(component['_subscriptions'][0].unsubscribe).toHaveBeenCalled();
    });
});
