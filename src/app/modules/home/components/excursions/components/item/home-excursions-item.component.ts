import { Component, Input } from '@angular/core';
import { ImageExtension, Resolution } from 'src/app/core/enums';
import { ExcursionModel, IExcursionModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'app-home-excursions-item',
	templateUrl: './home-excursions-item.component.html',
	styleUrls: ['./home-excursions-item.component.scss']
})
export class HomeExcursionsItemComponent {

	@Input() item: IExcursionModel = new ExcursionModel();

	readonly ImageExtension = ImageExtension;

	constructor() { }

	getImage(imageExtension: ImageExtension): string {
		const imageId = this.item?.imageId;
		return imageId ? `${configuration.api}/Excursions/GetImageNew/${this.item!.imageId}/${Resolution.nHD}/${imageExtension}` : '';
	}
}