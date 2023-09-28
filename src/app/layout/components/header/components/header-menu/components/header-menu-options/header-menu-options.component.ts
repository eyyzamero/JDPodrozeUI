import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthModel } from 'src/app/core/models';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';

@Component({
	selector: 'app-header-menu-options',
	templateUrl: './header-menu-options.component.html',
	styleUrls: ['./header-menu-options.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuOptionsComponent {

	@Input() auth?: IAuthModel | null = null;
	@Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

	constructor(
		private _router: Router,
		private _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
	) { }

	onOptionClick(): void {
		this.closeMenu.emit();
	}

	logout(event: Event): void {
		event.preventDefault();
		this.onOptionClick();
		this._authJsonWebTokenLocalStorageDataService.clear();
		this._router.navigate(['/']);
	}
}