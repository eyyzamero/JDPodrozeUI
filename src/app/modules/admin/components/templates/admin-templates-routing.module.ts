import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplatesTableComponent } from './components/table/admin-templates-table.component';
import { AdminTemplatesFormComponent } from './components/form/admin-templates-form.component';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => AdminTemplatesTableComponent
    },
    {
        path: 'form',
        loadComponent: () => AdminTemplatesFormComponent,
    },
    {
        path: 'form/:id',
        loadComponent: () => AdminTemplatesFormComponent
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