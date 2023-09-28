import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { IExcursionImageModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'app-excursions-details-images',
	templateUrl: './excursions-details-images.component.html',
	styleUrls: ['./excursions-details-images.component.scss']
})
export class ExcursionsDetailsImagesComponent {

	@ViewChild('carousel', { static: false }) carouselRef!: NgbCarousel;

	@Input() set images(value: IExcursionImageModel[]) {
		this._images = value;
		this._handleImagesLoad();
	}
	get images(): IExcursionImageModel[] {
		return this._images;
	}

	imagesLoading: boolean = true;
	currentlyDisplayedImageIndex: number = 0;

	private _images: IExcursionImageModel[] = [];

	constructor(
		private _changeDetectorRef: ChangeDetectorRef
	) { }

	getImage(imageId?: number): string {
		return imageId ?`${configuration.api}/Excursions/GetImage/${imageId}` : '';
	}

	onSlide(event: NgbSlideEvent): void {
		this.currentlyDisplayedImageIndex = Number(event.current.slice(6));
	}

	selectImage(index: number): void {
		this.carouselRef.select(`image-${index}`);
		this.carouselRef.pause();
		this.carouselRef.cycle();
	}

	private _handleImagesLoad(): void {
		const imageLoadPromises = this.images.map((image) => this._preloadImage(image.id));

		Promise.all(imageLoadPromises).then(() => {
			this.imagesLoading = false;
			this._changeDetectorRef.markForCheck();
		});
	}

	private _preloadImage(imageId: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = this.getImage(imageId); 
			img.onload = resolve;
			img.onerror = reject;
		});
	}
}