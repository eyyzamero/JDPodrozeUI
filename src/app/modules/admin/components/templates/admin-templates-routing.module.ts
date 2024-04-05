import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminExcursionsFormComponent } from '../excursions/components/form/admin-excursions-form.component';
import { AdminTemplatesTableComponent } from './components/table/admin-templates-table.component';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => AdminTemplatesTableComponent
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