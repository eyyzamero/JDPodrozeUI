import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
	},
	{
		path: 'account',
		loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }