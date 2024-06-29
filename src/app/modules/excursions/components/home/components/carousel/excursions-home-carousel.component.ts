import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IExcursionsCarouselItemModel } from '../../../common/carousel/models';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { Subscription } from 'rxjs';
import { Color } from 'src/app/core/enums';
import { ExcursionsDataService } from 'src/app/modules/excursions/services/data/excursions-data.service';
import { ExcursionsMapperService } from 'src/app/modules/excursions/services/mapper/excursions-mapper.service';

@Component({
    selector: 'app-excursions-home-carousel',
    templateUrl: './excursions-home-carousel.component.html',
    styleUrls: ['./excursions-home-carousel.component.scss']
})
export class ExcursionsHomeCarouselComponent implements OnInit, OnDestroy {

    @Output() onShowOfferClick: EventEmitter<void> = new EventEmitter<void>();

    excursions: IExcursionModel[] = [];
	carouselItems: IExcursionsCarouselItemModel[] = [];

    readonly Color = Color;

	private _subscriptions: Subscription[] = [];

    constructor(
        private readonly _excursionsDataService: ExcursionsDataService,
        private readonly _excursionsMapperService: ExcursionsMapperService
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
                        this.carouselItems = this._excursionsMapperService.arrayOfIExcursionModelToArrayOfIExcursionsCarouselItemModel(this.excursions);
					}
				}
			})
		);
	}

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }
}