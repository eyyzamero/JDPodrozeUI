import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterModule } from './components/footer/footer.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMenuComponent } from './components/header/components/menu/header-menu.component';
import { HeaderMenuOptionsComponent } from './components/header/components/menu/components/options/header-menu-options.component';
import { MenuChevronComponent } from './components/menu/components/chevron/menu-chevron.component';
import { NgClass } from '@angular/common';

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
        NgClass,
		FooterModule,
		NgbDropdownModule,
		LayoutRoutingModule
	]
})
export class LayoutModule { }