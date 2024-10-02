import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IAccountGetListReq, IUsersGetListRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
    providedIn: 'root'
})
export class UsersHttpService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getList(req: IAccountGetListReq): Observable<IUsersGetListRes> {
        return this._httpClient.post<IUsersGetListRes>(`${configuration.api}/Users`, req).pipe(
            take(1)
        );
    }
}
