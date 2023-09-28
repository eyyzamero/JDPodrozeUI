import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { roleGuard } from '../core/guards/role.guard';
import { RoleType } from '../core/enums';

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "",
				loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'about-us',
				loadChildren: () => import('../modules/about-us/about-us.module').then(m => m.AboutUsModule)
			},
			{
				path: 'contact',
				loadChildren: () => import('../modules/contact/contact.module').then(m => m.ContactModule)
			},
			{
				path: 'excursions',
				loadChildren: () => import('../modules/excursions/excursions.module').then(m => m.ExcursionsModule)
			},
			{
				path: 'admin',
				loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),
				canMatch: [() => roleGuard([RoleType.ADMINISTRATOR])]
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class LayoutRoutingModule { }