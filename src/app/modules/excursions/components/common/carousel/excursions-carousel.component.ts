import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Color, ImageExtension, Resolution } from 'src/app/core/enums';
import { configuration } from 'src/configurations/configuration';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { IExcursionsCarouselItemModel } from './models';

@Component({
	selector: 'app-excursions-carousel',
	templateUrl: './excursions-carousel.component.html',
	styleUrls: ['./excursions-carousel.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		NgbCarouselModule,
		LoadingSpinnerModule
	]
})
export class ExcursionsCarouselComponent {

	@ViewChild('carousel', { static: false }) carouselRef!: NgbCarousel;

	@Input() showNavigationIndicators: boolean = true;
	@Input() items: IExcursionsCarouselItemModel[] = [];

	@Output() onSlide: EventEmitter<NgbSlideEvent> = new EventEmitter<NgbSlideEvent>();

	isLoading: boolean = true;

	readonly Color = Color;
	readonly Resolution = Resolution;
	readonly ImageExtension = ImageExtension;

	constructor() { }

	getImage(imageId: number, resolution: Resolution, extension: ImageExtension): string {
		return `${configuration.api}/Excursions/GetImageNew/${imageId}/${resolution}/${extension}`;
	}

	onImageLoad(index: number): void {
		this.items[index].loaded = true;

		if (this.isLoading)
			this._checkFirstImageLoaded();
	}

	selectImage(index: number): void {
		this.carouselRef.select(`image-${index}`);
		this.carouselRef.pause();
		this.carouselRef.cycle();
	}

	private _checkFirstImageLoaded(): void {
		if (this.items.at(0)?.loaded)
			this.isLoading = false;
	}
}