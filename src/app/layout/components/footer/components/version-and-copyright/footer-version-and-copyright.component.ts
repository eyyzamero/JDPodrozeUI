import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-footer-version-and-copyright',
	templateUrl: './footer-version-and-copyright.component.html',
	styleUrls: ['./footer-version-and-copyright.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterVersionAndCopyrightComponent {

	constructor() { }
}