import {Component, Input } from '@angular/core';
import { Color } from 'src/app/core/enums';

@Component({
	selector: 'app-loading-spinner',
	templateUrl: './loading-spinner.component.html',
	styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

	@Input() blur: boolean = false;
	@Input() set sizePX(value: number) {
		this._sizePX = value;
		this.thickness = this._sizePX / 8;
	}
	get sizePX(): number {
		return this._sizePX;
	}
	@Input() center: boolean = true;
	@Input() color: Color = Color.ORANGE;

	thickness: number = 8;

	private _sizePX: number = 64;

	constructor() { }
}