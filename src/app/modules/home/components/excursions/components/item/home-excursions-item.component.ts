import { Component, Input } from '@angular/core';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'app-home-excursions-item',
	templateUrl: './home-excursions-item.component.html',
	styleUrls: ['./home-excursions-item.component.scss']
})
export class HomeExcursionsItemComponent {

	@Input() item?: IExcursionModel;

	constructor() { }

	getImage(): string {
		const imageId = this.item?.imageId;
		return imageId ? `${configuration.api}/Excursions/GetImage/${this.item!.imageId}` : '';
	}
}