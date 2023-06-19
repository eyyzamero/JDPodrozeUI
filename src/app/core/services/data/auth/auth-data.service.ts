import { Injectable } from '@angular/core';
import { BaseDataService } from '../base/base-data.service';
import { AuthModel, IAuthModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export class AuthDataService extends BaseDataService<IAuthModel | null> {

	constructor() {
		super(new AuthModel());
	}

	override add(data: IAuthModel | null, next: boolean = true): void {
		data ? super.add(data, next) : super.clear(next);
	}
}