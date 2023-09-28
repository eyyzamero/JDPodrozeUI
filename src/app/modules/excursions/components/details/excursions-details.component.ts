import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { ExcursionsDetailsMapperService } from './services/mapper/excursions-details-mapper.service';
import { LoadingState } from 'src/app/core/enums';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ExcursionModel, IExcursionModel } from '../../models';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';

@Component({
	selector: 'app-excursions-details',
	templateUrl: './excursions-details.component.html',
	styleUrls: ['./excursions-details.component.scss']
})
export class ExcursionsDetailsComponent implements OnInit, OnDestroy {

	excursion: IExcursionModel = new ExcursionModel();
	loadingState: LoadingState = LoadingState.LOADING;
	editor = DecoupledEditor;

	readonly LoadingState = LoadingState;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _excursionsHttpService: ExcursionsHttpClientService,
		private _excursionsDetailsMapperService: ExcursionsDetailsMapperService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._activatedRoute.params.subscribe({
				next: (params) => params['id'] ? this._getData(+params['id']) : this._router.navigate(['/'])
			})
		);
	}

	private _getData(id: number): void {
		this.loadingState = LoadingState.LOADING;

		this._subscriptions.push(
			this._excursionsHttpService.getItem(id).pipe(
				map(res => this._excursionsDetailsMapperService.iExcursionsGetItemResToIExcursionModel(res))
			).subscribe({
				next: (value) => {
					this.excursion = value;
					this.loadingState = LoadingState.LOADED;
				}
			})
		);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}