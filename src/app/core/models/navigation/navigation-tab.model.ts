import { INavigationTabModel } from '..';

export class NavigationTabModel implements INavigationTabModel {

	constructor(
		public name: string,
		public path: string
	) { }
}