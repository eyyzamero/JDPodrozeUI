import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data.service';

@Injectable({
	providedIn: 'root'
})
export abstract class BaseLocalStorageDataService<T> extends BaseDataService<T> {

	constructor(
		private _localStorageKey: string
	) {
		super();

		const localStorageItem = this._getLocalStorageItem();

		if (localStorageItem)
			this._setLocalStorageItem(localStorageItem);
	}

	override add(value: T, next: boolean = true): void {
		this._setLocalStorageItem(value, next);
	}

	override clear(next: boolean = true): void {
		localStorage.removeItem(this._localStorageKey);
		super.clear(next);
	}

	protected _getLocalStorageItem(): T | null {
		const localStorageItem = localStorage.getItem(this._localStorageKey);
		const parsedItem = localStorageItem ? JSON.parse(localStorageItem) as T : null;
		return parsedItem;
	}

	protected _setLocalStorageItem(value: T, next: boolean = true): void {
		localStorage.setItem(this._localStorageKey, JSON.stringify(value));
		super.add(value, next);
	}
}
