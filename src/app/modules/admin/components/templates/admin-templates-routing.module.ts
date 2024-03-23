import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplatesComponent } from './admin-templates.component';

const routes: Routes = [
    {
        path: '',
        component: AdminTemplatesComponent
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