import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionsDetailsComponent } from './excursions-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';
import { ExcursionsDetailsMapperService } from './services/mapper/excursions-details-mapper.service';
import { LoadingState } from 'src/app/core/enums';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ExcursionsDetailsImagesComponent } from './components/images/excursions-details-images.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ExcursionsDetailsComponent', () => {
    let component: ExcursionsDetailsComponent;
    let fixture: ComponentFixture<ExcursionsDetailsComponent>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
    let mockHttpClient: jasmine.SpyObj<ExcursionsHttpClientService>;
    let mockMapperService: jasmine.SpyObj<ExcursionsDetailsMapperService>;
    let paramsSubject: Subject<any>;

    beforeEach(async () => {
        paramsSubject = new Subject();

        mockRouter = jasmine.createSpyObj('Router', ['navigate']);
        mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], { params: paramsSubject.asObservable() });
        mockHttpClient = jasmine.createSpyObj('ExcursionsHttpClientService', ['getItem']);
        mockMapperService = jasmine.createSpyObj('ExcursionsDetailsMapperService', ['iExcursionsGetItemResToIExcursionModel']);

        await TestBed.configureTestingModule({
            declarations: [ExcursionsDetailsComponent, ExcursionsDetailsImagesComponent],
            imports: [
                RouterTestingModule,
                FormsModule,
                CKEditorModule,
                LoadingSpinnerModule
            ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: ExcursionsHttpClientService, useValue: mockHttpClient },
                { provide: ExcursionsDetailsMapperService, useValue: mockMapperService }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('Should navigate to the home page if id is missing or invalid', () => {
            paramsSubject.next({ id: null });

            fixture.detectChanges();

            expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
        });
    });

    describe('Template', () => {
        it('Should show loading spinner when loadingState is LOADING', () => {
            component.loadingState.set(LoadingState.LOADING);
            fixture.detectChanges();

            const spinner = fixture.debugElement.query(By.css('app-loading-spinner'));

            expect(spinner).toBeTruthy();
        });
    });
});
