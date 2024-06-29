import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { ExcursionsDataService } from 'src/app/modules/excursions/services/data/excursions-data.service';

@Component({
    selector: 'app-excursions-home-list',
    templateUrl: './excursions-home-list.component.html',
    styleUrls: ['./excursions-home-list.component.scss']
})
export class ExcursionsHomeListComponent implements OnInit, OnDestroy {

    @ViewChild('container') private _containerRef?: ElementRef<HTMLDivElement>;

    excursions?: IExcursionModel[] = undefined;
	state: LoadingState = LoadingState.LOADING;

    readonly LoadingState = LoadingState;

    private _subscriptions: Subscription[] = [];

    constructor(
		private readonly _excursionsDataService: ExcursionsDataService
	) { }

    ngOnInit(): void {
		this._subscriptions.push(
			this._excursionsDataService.observable.subscribe({
				next: (value) => {
					this.excursions = value.data;
					this.state = value.state;
				}
			})
		);
	}

    scrollIntoView(): void {
		this._containerRef?.nativeElement.scrollIntoView({ behavior: 'smooth', inline: 'start' })	
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}