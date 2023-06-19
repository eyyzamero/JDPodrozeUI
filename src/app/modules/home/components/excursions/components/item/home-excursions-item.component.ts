import { Component, Input } from '@angular/core';
import { IExcursionModel } from '../../models';

@Component({
	selector: 'app-home-excursions-item',
	templateUrl: './home-excursions-item.component.html',
	styleUrls: ['./home-excursions-item.component.scss']
})
export class HomeExcursionsItemComponent {

	@Input() set item(value: IExcursionModel | undefined) {
		this._item = value;
	}
	get item(): IExcursionModel | undefined {
		return this._item;
	}

	private _item?: IExcursionModel;

	constructor() { }
}