import { Injectable } from '@angular/core';
import { INavigationTabModel, NavigationTabModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

	get items(): INavigationTabModel[] {
		return this._items;
	};

	private _items: INavigationTabModel[] = [];

	constructor() {
		this._items.push(
			new NavigationTabModel('Wycieczki', ''),
			new NavigationTabModel('Galeria', '/gallery'),
			new NavigationTabModel('O nas', '/about-us'),
			new NavigationTabModel('Kontakt', '/contact')
		);
	}
}