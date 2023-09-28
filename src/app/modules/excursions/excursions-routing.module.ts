import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionsComponent } from './excursions.component';
import { ExcursionsDetailsComponent } from './components/details/excursions-details.component';
import { ExcursionsEnrollComponent } from './components/enroll/excursions-enroll.component';
import { ExcursionsEnrollSuccessComponent } from './components/enroll/components/excursions-enroll-success/excursions-enroll-success.component';

const routes: Routes = [
	{
		path: '',
		component: ExcursionsComponent,
		children: [
			{
				path: "details/:id",
				component: ExcursionsDetailsComponent
			},
			{
				path: 'enroll/success',
				component: ExcursionsEnrollSuccessComponent
			},
			{
				path: 'enroll/:excursionId',
				component: ExcursionsEnrollComponent
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