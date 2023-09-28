import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterModule } from './components/footer/footer.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderMenuComponent } from './components/header/components/header-menu/header-menu.component';
import { HeaderMenuOptionsComponent } from './components/header/components/header-menu/components/header-menu-options/header-menu-options.component';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		MenuComponent,
		HeaderMenuComponent,
		HeaderMenuOptionsComponent
	],
	imports: [
		CommonModule,
		FooterModule,
		NgbModule,
		AngularSvgIconModule,
		LayoutRoutingModule
	]
})
export class LayoutModule { }