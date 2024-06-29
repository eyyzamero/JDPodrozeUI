import { Component, Input } from '@angular/core';
import { ImageExtension, Resolution } from 'src/app/core/enums';
import { ExcursionModel, IExcursionModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';

@Component({
    selector: 'app-excursions-home-list-item',
    templateUrl: './excursions-home-list-item.component.html',
    styleUrls: ['./excursions-home-list-item.component.scss']
})
export class ExcursionsHomeListItemComponent {

    @Input() item: IExcursionModel = new ExcursionModel();

	readonly ImageExtension = ImageExtension;

	constructor() { }

	getImage(imageExtension: ImageExtension): string {
		const imageId = this.item?.imageId;
		return imageId ? `${configuration.api}/Excursions/GetImageNew/${this.item!.imageId}/${Resolution.nHD}/${imageExtension}` : '';
	}
}