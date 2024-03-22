import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterModule } from './components/footer/footer.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMenuComponent } from './components/header/components/menu/header-menu.component';
import { HeaderMenuOptionsComponent } from './components/header/components/menu/components/options/header-menu-options.component';
import { MenuChevronComponent } from './components/menu/components/chevron/menu-chevron.component';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		MenuComponent,
		HeaderMenuComponent,
		HeaderMenuOptionsComponent,
		MenuChevronComponent
	],
	imports: [
		CommonModule,
		FooterModule,
		NgbDropdownModule,
		LayoutRoutingModule
	]
})
export class LayoutModule { }