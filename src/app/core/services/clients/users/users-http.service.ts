import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IUsersGetListRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
    providedIn: 'root'
})
export class UsersHttpService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getList(): Observable<IUsersGetListRes> {
        return this._httpClient.get<IUsersGetListRes>(`${configuration.api}/Users`).pipe(
            take(1)
        );
    }
}
