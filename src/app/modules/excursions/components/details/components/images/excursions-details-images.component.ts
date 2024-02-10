import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { ImageExtension, Resolution } from 'src/app/core/enums';
import { IExcursionImageModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';
import { ExcursionsCarouselItemModel, IExcursionsCarouselItemModel } from '../../../common/carousel/models';
import { ExcursionsCarouselComponent } from '../../../common/carousel/excursions-carousel.component';

@Component({
	selector: 'app-excursions-details-images',
	templateUrl: './excursions-details-images.component.html',
	styleUrls: ['./excursions-details-images.component.scss']
})
export class ExcursionsDetailsImagesComponent {

	@ViewChild('carousel') carouselRef!: ExcursionsCarouselComponent;
	@ViewChildren('imageSelector') imageSelectorsRef!: QueryList<ElementRef<HTMLPictureElement>>;

	@Input() set images(value: IExcursionImageModel[]) {
		this._images = value;
		this._setCarouselData();
	}
	get images(): IExcursionImageModel[] {
		return this._images;
	}

	carouselItems: IExcursionsCarouselItemModel[] = [];
	currentlyDisplayedImageIndex: number = 0;

	readonly ImageExtension = ImageExtension;

	private _images: IExcursionImageModel[] = [];

	constructor() { }

	getImage(id: number, imageExtension: ImageExtension): string {
		return `${configuration.api}/Excursions/GetImageNew/${id}/${Resolution.nHD}/${imageExtension}`;
	}

	onSlide(event: NgbSlideEvent): void {
		this.currentlyDisplayedImageIndex = Number(event.current.slice(6));
		const imageSelectorsRefArray = this.imageSelectorsRef.toArray();
		const activeElement = imageSelectorsRefArray[this.currentlyDisplayedImageIndex];
		const positionY = activeElement.nativeElement.offsetTop - (activeElement.nativeElement.parentElement?.offsetTop ?? 0);
		activeElement.nativeElement.parentElement?.scrollTo({ top: positionY, behavior: 'smooth' });
	}

	selectImage(index: number): void {
		this.carouselRef.selectImage(index);
	}

	private _setCarouselData(): void {
		this._images.forEach(image => {
			const carouselItem = new ExcursionsCarouselItemModel(image.id);
			this.carouselItems.push(carouselItem);
		})
	}
}