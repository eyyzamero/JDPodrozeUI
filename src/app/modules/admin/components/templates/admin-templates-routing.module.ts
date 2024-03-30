import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplatesComponent } from './admin-templates.component';
import { AdminExcursionsFormComponent } from '../excursions/components/form/admin-excursions-form.component';

const routes: Routes = [
    {
        path: '',
        component: AdminTemplatesComponent
    },
    {
        path: 'form',
        loadComponent: () => AdminExcursionsFormComponent,
        data: {
            template: true
        }
    },
    {
        path: 'form/:id',
        loadComponent: () => AdminExcursionsFormComponent,
        data: {
            template: true
        }
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
export class AdminTemplatesRoutingModule { }