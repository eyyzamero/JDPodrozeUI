import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionsEnrollComponent } from './excursions-enroll.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';
import { ExcursionsMapperService } from '../../services/mapper/excursions-mapper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingState, PaymentMethod } from 'src/app/core/enums';
import { IExcursionsEnrollReq } from 'src/app/core/contracts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ExcursionsEnrollComponent', () => {
    let component: ExcursionsEnrollComponent;
    let fixture: ComponentFixture<ExcursionsEnrollComponent>;
    let routerSpy: jasmine.SpyObj<Router>;
    let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
    let excursionsHttpServiceSpy: jasmine.SpyObj<ExcursionsHttpClientService>;
    let excursionsMapperServiceSpy: jasmine.SpyObj<ExcursionsMapperService>;

    beforeEach(async () => {
        routerSpy = jasmine.createSpyObj('Router', ['navigate']);
        activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
            params: of({ excursionId: 1 })
        });
        excursionsHttpServiceSpy = jasmine.createSpyObj('ExcursionsHttpClientService', ['getItem', 'enroll']);
        excursionsMapperServiceSpy = jasmine.createSpyObj('ExcursionsMapperService', ['enrollFormGroupToIExcursionsEnrollReqNew']);

        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [ExcursionsEnrollComponent],
            providers: [
                { provide: Router, useValue: routerSpy },
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
                { provide: ExcursionsHttpClientService, useValue: excursionsHttpServiceSpy },
                { provide: ExcursionsMapperService, useValue: excursionsMapperServiceSpy }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsEnrollComponent);
        component = fixture.componentInstance;

        component.excursion = {
            id: 1,
            title: 'Test Excursion',
            shortDescription: 'Short description',
            description: 'Full description',
            active: true,
            inCarousel: false,
            dateFrom: undefined,
            dateTo: undefined,
            priceGross: 100,
            priceNet: 123,
            discount: true,
            discountPrice: 50,
            seats: 10,
            availableSeats: 5,
            imageId: 0,
            images: []
        };

        component.excursionLoadingState = LoadingState.LOADED;
        component.excursionEnrollLoadingState = LoadingState.LOADED;
        fixture.detectChanges();
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('Method _getExcursion', () => {
        it('Should navigate to details page on error', () => {
            excursionsHttpServiceSpy.getItem.and.returnValue(throwError(() => new Error('Error fetching excursion')));

            (component as any)._getExcursion(1);

            expect(routerSpy.navigate).toHaveBeenCalledWith(['/excursions/details/1']);
        });
    });

    describe('Method onReservation', () => {
        it('Should handle errors during enrollment', () => {
            const request: IExcursionsEnrollReq = {
                excursionId: 1,
                booker: {
                    name: 'John',
                    surname: 'Doe',
                    birthDate: '1990-01-01',
                    discount: true
                },
                participants: [],
                paymentMethod: PaymentMethod.TRADITIONAL_TRANSFER
            };

            component.form.patchValue({
                excursionId: 1,
                booker: request.booker,
                participants: [],
                paymentMethod: request.paymentMethod
            });
            excursionsMapperServiceSpy.enrollFormGroupToIExcursionsEnrollReqNew.and.returnValue(request);
            excursionsHttpServiceSpy.enroll.and.returnValue(throwError(() => new Error('Enrollment error')));

            component.onReservation();

            component.form.markAllAsTouched();
            component.form.updateValueAndValidity();

            expect(component.excursionEnrollLoadingState).toEqual(LoadingState.LOADED);
        });
    });

    describe('Price getter', () => {
        it('Should calculate correct price based on discounts', () => {
            component.form.patchValue({
                booker: { discount: true },
                participants: [
                    { discount: true },
                    { discount: false }
                ]
            });
            const price = component.price;

            expect(price).toEqual(50);
        });
    });
});
