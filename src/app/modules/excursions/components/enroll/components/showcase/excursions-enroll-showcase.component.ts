import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageExtension, Resolution } from 'src/app/core/enums';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { configuration } from 'src/configurations/configuration';

@Component({
    selector: 'app-excursions-enroll-showcase',
    templateUrl: './excursions-enroll-showcase.component.html',
    styleUrls: ['./excursions-enroll-showcase.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcursionsEnrollShowcaseComponent {

    @Input({ required: true }) excursion!: IExcursionModel;

    readonly ImageExtension = ImageExtension;

    constructor() { }

    getImage(id: number, imageExtension: ImageExtension): string {
		return `${configuration.api}/Excursions/GetImageNew/${id}/${Resolution.nHD}/${imageExtension}`;
	}
}