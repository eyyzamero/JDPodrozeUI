import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModulePreloader } from './core/preloaders';

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
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: AppModulePreloader
		})
	],
	exports: [
		RouterModule
	],
	providers: [
		AppModulePreloader
	]
})
export class AppRoutingModule { }