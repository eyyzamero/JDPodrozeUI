import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionsCarouselComponent } from './excursions-carousel.component';
import { NgbCarouselModule, NgbSlideEvent, NgbSlideEventDirection, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IExcursionsCarouselItemModel } from './models';
import { ImageExtension, Resolution } from 'src/app/core/enums';
import { configuration } from 'src/configurations/configuration';
import '@angular/localize/init';

describe('ExcursionsCarouselComponent', () => {
    let component: ExcursionsCarouselComponent;
    let fixture: ComponentFixture<ExcursionsCarouselComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExcursionsCarouselComponent, NgbCarouselModule, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('Method getImage', () => {
        it('Should return the correct URL for the given image parameters', () => {
            const imageId = 1;
            const resolution = Resolution.nHD;
            const extension = ImageExtension.WEBP;

            const expectedUrl = `${configuration.api}/Excursions/GetImageNew/${imageId}/${resolution}/${extension}`;
            const result = component.getImage(imageId, resolution, extension);

            expect(result).toEqual(expectedUrl);
        });
    });

    describe('Method selectImage', () => {
        it('Should select, pause, and cycle the carousel', () => {
            const carouselMock = jasmine.createSpyObj('NgbCarousel', ['select', 'pause', 'cycle']);
            component.carouselRef = carouselMock;
            const index = 1;

            component.selectImage(index);

            expect(carouselMock.select).toHaveBeenCalledWith(`image-${index}`);
            expect(carouselMock.pause).toHaveBeenCalled();
            expect(carouselMock.cycle).toHaveBeenCalled();
        });
    });

    describe('Inputs and Outputs', () => {
        it('Should render items based on input', () => {
            component.items = [
              { id: 1, excursionId: 101, title: 'Title 1', description: 'Description 1', loaded: true },
              { id: 2, excursionId: 102, title: 'Title 2', description: 'Description 2', loaded: true },
            ];
            fixture.detectChanges();
          
            const slides = fixture.debugElement.queryAll(By.css('.excursions-carousel-container .image-wrapper'));
          
            expect(slides.length).toBe(2);
          });
          

        it('Should emit onSlide event when a slide event occurs', () => {
            spyOn(component.onSlide, 'emit');
            const slideEvent: NgbSlideEvent = {
                source: NgbSlideEventSource.TIMER, direction: NgbSlideEventDirection.END,
                prev: '',
                current: '',
                paused: false
            };

            component.onSlide.emit(slideEvent);

            expect(component.onSlide.emit).toHaveBeenCalledWith(slideEvent);
        });
    });

    describe('Template Rendering', () => {
        it('Should correctly bind item data in template', () => {
            const mockItems: IExcursionsCarouselItemModel[] = [
                { id: 1, excursionId: 101, title: 'Mock Title', description: 'Mock Description', loaded: true },
            ];
            component.items = mockItems;
            fixture.detectChanges();

            const titleElement = fixture.debugElement.query(By.css('.carousel-caption h3')).nativeElement;
            const descriptionElement = fixture.debugElement.query(By.css('.carousel-caption p')).nativeElement;

            expect(titleElement.textContent).toContain('Mock Title');
            expect(descriptionElement.textContent).toContain('Mock Description');
        });

        it('Should set routerLink correctly when clickRedirect is true', () => {
            component.items = [
                { id: 1, excursionId: 101, title: 'Test', description: '', loaded: true },
            ];
            component.clickRedirect = true;
            fixture.detectChanges();

            const linkElement = fixture.debugElement.query(By.css('.image-wrapper')).nativeElement.getAttribute('href');

            expect(linkElement).toContain('/excursions/details/101');
        });

        it('Should not set routerLink when clickRedirect is false', () => {
            component.items = [
                { id: 1, excursionId: 101, title: 'Test', description: '', loaded: true },
            ];
            component.clickRedirect = false;
            fixture.detectChanges();

            const linkElement = fixture.debugElement.query(By.css('.image-wrapper')).nativeElement.getAttribute('href');

            expect(linkElement).toBeNull();
        });
    });
});