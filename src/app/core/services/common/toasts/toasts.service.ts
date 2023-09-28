import { Injectable } from '@angular/core';
import { IToastModel, ToastModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export class ToastsService {

	toasts: IToastModel[] = [];

	constructor() { }

	show(text: string, classes?: string): void {
		const toast = new ToastModel(this.toasts.length + 1, text, classes);
		this.toasts.push(toast);
	}

	remove(toast: IToastModel): void {
		this.toasts = this.toasts.filter(t => t.id !== toast.id);
	}

	clear(): void {
		this.toasts.splice(0, this.toasts.length);
	}
}