import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-footer-logo',
	templateUrl: './footer-logo.component.html',
	styleUrls: ['./footer-logo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterLogoComponent {

	constructor() { }
}