import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-footer-socials',
	templateUrl: './footer-socials.component.html',
	styleUrls: ['./footer-socials.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSocialsComponent {

	constructor() { }
}