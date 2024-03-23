import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
		children: [
			{
				path: 'login',
                loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
			},
			{
				path: 'register',
				loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
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
export class AccountRoutingModule { }