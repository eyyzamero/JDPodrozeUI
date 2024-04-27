import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, take } from 'rxjs';
import { ExcursionsDetailsMapperService } from './services/mapper/excursions-details-mapper.service';
import { LoadingState } from 'src/app/core/enums';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ExcursionModel, IExcursionModel } from '../../models';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';

@Component({
	selector: 'app-excursions-details',
	templateUrl: './excursions-details.component.html',
	styleUrls: ['./excursions-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcursionsDetailsComponent implements OnInit {

	excursion: WritableSignal<IExcursionModel> = signal(new ExcursionModel());
	loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
	editor = DecoupledEditor;

	readonly LoadingState = LoadingState;

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _excursionsHttpService: ExcursionsHttpClientService,
		private readonly _excursionsDetailsMapperService: ExcursionsDetailsMapperService
	) { }

	ngOnInit(): void {
        scrollTo({ top: 0, behavior: 'smooth' });
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
        this._activatedRoute.params.pipe(
            take(1)
        ).subscribe({
            next: (params) => params['id'] ? this._getData(+params['id']) : this._router.navigate(['/'])
        });
	}

	private _getData(id: number): void {
		this.loadingState.set(LoadingState.LOADING);
		this._excursionsHttpService.getItem(id).pipe(
			first(),
			map(res => this._excursionsDetailsMapperService.iExcursionsGetItemResToIExcursionModel(res))
		).subscribe({
			next: (value) => {
				this.excursion.set(value);
				this.loadingState.set(LoadingState.LOADED);
			}
		});
	}
}