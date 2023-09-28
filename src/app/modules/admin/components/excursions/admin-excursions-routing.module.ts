import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminExcursionsTableComponent } from './components/table/admin-excursions-table.component';
import { AdminExcursionsComponent } from './admin-excursions.component';
import { AdminExcursionsFormComponent } from './components/form/admin-excursions-form.component';

const routes: Routes = [
	{
		path: '',
		component: AdminExcursionsComponent,
		children: [
			{
				path: '',
				component: AdminExcursionsTableComponent
			},
			{
				path: 'form',
				component: AdminExcursionsFormComponent
			},
			{
				path: 'form/:id',
				component: AdminExcursionsFormComponent
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