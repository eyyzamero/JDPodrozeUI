import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionsComponent } from './excursions.component';
import { ExcursionsEnrollSuccessComponent } from './components/enroll/components/success/excursions-enroll-success.component';

const routes: Routes = [
	{
		path: '',
		component: ExcursionsComponent,
		children: [
			{
				path: "details/:id",
				loadChildren: () => import('./components/details/excursions-details.module').then(m => m.ExcursionsDetailsModule)
			},
			{
				path: 'enroll/success',
				component: ExcursionsEnrollSuccessComponent
			},
			{
				path: 'enroll/:excursionId',
				loadChildren: () => import('./components/enroll/excursions-enroll.module').then(m => m.ExcursionsEnrollModule)
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
export class ExcursionsRoutingModule { }