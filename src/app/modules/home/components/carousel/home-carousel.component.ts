import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/core/enums';
import { Subscription } from 'rxjs';
import { ExcursionsDataService } from 'src/app/modules/excursions/services/data/excursions-data.service';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { ExcursionsCarouselItemModel, IExcursionsCarouselItemModel } from 'src/app/modules/excursions/components/common/carousel/models';

@Component({
	selector: 'app-home-carousel',
	templateUrl: './home-carousel.component.html',
	styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit, OnDestroy {

	@Output() onShowOfferClick: EventEmitter<void> = new EventEmitter<void>();

	excursions: IExcursionModel[] = [];
	carouselItems: IExcursionsCarouselItemModel[] = [];

	readonly Color = Color;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _excursionsDataService: ExcursionsDataService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._excursionsDataService.observable.subscribe({
				next: (value) => {
					const items = value.data?.filter(x => x.inCarousel);
					
					if (items) {
						this.excursions = items;
						this._setCarouselData();
					}
				}
			})
		);
	}

	private _setCarouselData(): void {
		this.excursions.forEach(excursion => {
			const carouselItem = new ExcursionsCarouselItemModel(excursion.imageId, excursion.id, excursion.title, excursion.description);
			this.carouselItems.push(carouselItem);
		});
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}