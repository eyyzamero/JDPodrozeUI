import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionsComponent } from './excursions.component';

const routes: Routes = [
	{
		path: '',
		component: ExcursionsComponent,
		children: [
			{
				path: "details",
				loadChildren: () => import('./components/details/excursions-details.module').then(m => m.ExcursionsDetailsModule)
			},
			{
				path: 'enroll',
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