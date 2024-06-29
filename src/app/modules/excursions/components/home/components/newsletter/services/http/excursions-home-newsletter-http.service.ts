import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterEnrollReq } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsHomeNewsletterHttpService {

	constructor(
		private _httpClient: HttpClient
	) { }

	enroll(req: NewsletterEnrollReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Newsletter/Enroll`, req);
	}
}