import { INavigationTabModel } from '..';
import { NavigationTarget, RoleType } from '../../enums';

export class NavigationTabModel implements INavigationTabModel {

	constructor(
		public name: string,
		public path: string,
		public disabled: boolean = false,
		public role?: RoleType,
		public target: NavigationTarget = NavigationTarget.ALL,
	) { }
}