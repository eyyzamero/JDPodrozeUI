import { Component, OnInit } from '@angular/core';
import { ExcursionModel, IExcursionModel } from './models';

@Component({
  selector: 'app-home-excursions',
  templateUrl: './home-excursions.component.html',
  styleUrls: ['./home-excursions.component.scss']
})
export class HomeExcursionsComponent implements OnInit {

	excursions: Array<IExcursionModel> = new Array<IExcursionModel>();

	ngOnInit() {
		for (let i = 0; i < 15; i++)
			this.excursions.push(new ExcursionModel(`${i}`, `Wycieczka #${i}`));
	}
}