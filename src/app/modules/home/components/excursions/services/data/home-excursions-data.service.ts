import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services/data/base/base-data.service';
import { ExcursionModel, IExcursionModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class HomeExcursionsDataService extends BaseDataService<Array<IExcursionModel>> {

	constructor() {
		super([
			new ExcursionModel(1, 'Wycieczka 1', 'Opis wycieczki 1 bardzo super opis super opis OPIS OPIS OPIS _______ jest to naprawde super wycieczka - jest niesamowicie', 0, 0, 'assets/images/carousel/1.jpg'),
			new ExcursionModel(2, 'Wycieczka 2', 'Krótki opis wycieczki - zapisz się i jedz z nami nie pierdol', 0, 0, 'assets/images/carousel/2.jpg'),
			new ExcursionModel(3, 'Wycieczka 3', 'Brak opisu', 0, 0, 'assets/images/carousel/3.jpg'),
			new ExcursionModel(4, 'Wycieczka 4', 'Dorotka ty znowu do tego kawalera jedziesz? Zamieszkaj sobie z nim już może...', 0, 0, 'assets/images/carousel/4.jpg'),
			new ExcursionModel(5, 'Wycieczka 5', 'Cześć jestem maruda Irenka - pomarudzę i cię moją gadką zanudzę', 0, 0, 'assets/images/carousel/5.jpg')
		]);
	}
}