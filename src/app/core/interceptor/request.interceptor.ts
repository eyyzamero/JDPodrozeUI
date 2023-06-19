import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDataService } from '../services/data/auth/auth-data.service';
import { PRIMARY_OUTLET, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

	constructor(
		private _authDataService: AuthDataService,
		private _router: Router
	) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				'Authorization': `${this._authDataService.currentValue.data?.Token}`
			}
		});

		return next.handle(request).pipe(
			tap({
				error: (error: HttpErrorResponse) => {
					if (error.status === 401) {
						let primaryRouterUrl = this._router.parseUrl(this._router.url).root.children[PRIMARY_OUTLET];

						if (!primaryRouterUrl || primaryRouterUrl.segments[0].path !== 'login') {
							this._authDataService.clear();
							this._router.navigate(['account/login'], {
								queryParams: {
									url: this._router.url !== '/' ? this._router.url : null
								}
							});
						}
					}
				}
			})
		);
	}
}