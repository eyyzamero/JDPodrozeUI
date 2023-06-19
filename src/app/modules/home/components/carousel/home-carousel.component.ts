import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselModel, IHomeCarouselModel } from './models';

@Component({
	selector: 'app-home-carousel',
	templateUrl: './home-carousel.component.html',
	styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent {

	@ViewChild('carousel', { static: true }) carouselRef?: NgbCarousel;

	images: IHomeCarouselModel[] = [
		new HomeCarouselModel(1, 'assets/images/carousel/1.jpg', false, '[USA] Alabama kurwa United States Crocodile'),
		new HomeCarouselModel(2, 'assets/images/carousel/2.jpg', false, '[Węgry] Budapeszt przy wodzie'),
		new HomeCarouselModel(3, 'assets/images/carousel/3.jpg', false, '[Polska] Sosnowiec')
	];
	currentIndex: number = 0;
	allImagesLoaded: boolean = false;

	constructor() { }

	onNext(): void {
		this.currentIndex = (this.currentIndex + 1) % this.images.length;
	}

	onPrevious(): void {
		this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
	}

	onImageLoad(item: IHomeCarouselModel) {
		item.loaded = true;

		if (this.images.every(x => x.loaded))
			this.allImagesLoaded = true;
	}
}