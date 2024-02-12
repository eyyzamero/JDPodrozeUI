import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-menu-chevron',
	templateUrl: './menu-chevron.component.html',
	styleUrls: ['./menu-chevron.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuChevronComponent {

	constructor() { }
}