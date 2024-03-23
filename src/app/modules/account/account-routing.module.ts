import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent,
		children: [
			{
				path: 'login',
                loadComponent: () => LoginComponent
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