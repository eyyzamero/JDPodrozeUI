import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./components/excursions/admin-excursions.module').then(m => m.ExcursionsModule)
			},
            {
                path: 'templates',
                loadChildren: () => import('./components/templates/admin-templates.module').then(m => m.AdminTemplatesModule)
            },
			{
				path: 'orders',
				loadChildren: () => import('./components/orders/admin-orders.module').then(m => m.AdminOrdersModule)
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
export class AdminRoutingModule { }