import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { INavigationTabModel } from 'src/app/core/models';
import { NavigationService } from 'src/app/core/services/common/navigation/navigation.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	tabs: INavigationTabModel[] = [];

	constructor(
		private _ngbOffcanvasService: NgbOffcanvas,
		private _navigationService: NavigationService
	) { }

	ngOnInit(): void {
		this.tabs = this._navigationService.items;
	}

	close(): void {
		this._ngbOffcanvasService.dismiss();
	}

	onNavigation(): void {
		this.close();
	}
}