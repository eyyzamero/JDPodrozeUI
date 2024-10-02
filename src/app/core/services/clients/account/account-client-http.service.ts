import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountAddOrEditReq } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
    providedIn: 'root'
})
export class AccountClientHttpService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    addOrEdit(req: AccountAddOrEditReq): Observable<number | null> {
        return this._httpClient.post<number | null>(`${configuration.api}/Account/AddOrEdit`, req);
    }

    delete(id: number) {
        return this._httpClient.delete<void>(`${configuration.api}/Account/Delete/${id}`);
    }
}