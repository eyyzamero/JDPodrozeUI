import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Color } from 'src/app/core/enums';
import { Subscription } from 'rxjs';
import { configuration } from 'src/configurations/configuration';
import { ExcursionsDataService } from 'src/app/modules/excursions/services/data/excursions-data.service';
import { IExcursionModel } from 'src/app/modules/excursions/models';

@Component({
	selector: 'app-home-carousel',
	templateUrl: './home-carousel.component.html',
	styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit, OnDestroy {

	excursions: IExcursionModel[] = [];
	isLoading = true;

	readonly Color = Color;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _excursionsDataService: ExcursionsDataService,
		private _changeDetectorRef: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._excursionsDataService.observable.subscribe({
				next: (value) => {
					this.isLoading = true;
					const items = value.data?.filter(x => x.inCarousel);
					
					if (items) {
						this.excursions = items;
						this._handleImagesLoad();
					}
				}
			})
		);
	}

	getImage(imageId?: number): string {
		return imageId ?`${configuration.api}/Excursions/GetImage/${imageId}` : '';
	}

	private _handleImagesLoad(): void {
		const imageLoadPromises = this.excursions.filter(x => x.imageId !== 0).map((excursion) => this._preloadImage(excursion.imageId));

		Promise.all(imageLoadPromises).then(() => {
			this.isLoading = false;
			this._changeDetectorRef.markForCheck();
		});
	}

	private _preloadImage(imageId: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = this.getImage(imageId); 
			img.onload = resolve;
			img.onerror = (err) => { reject(err); console.log(err)};
		});
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}