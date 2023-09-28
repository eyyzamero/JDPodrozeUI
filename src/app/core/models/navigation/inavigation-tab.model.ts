import { NavigationTarget, RoleType } from "../../enums";

export interface INavigationTabModel {
	name: string;
	path: string;
	disabled: boolean;
	target: NavigationTarget;
	role?: RoleType;
}