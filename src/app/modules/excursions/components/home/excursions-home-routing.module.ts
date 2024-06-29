import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionsHomeComponent } from './excursions-home.component';

const routes: Routes = [
    {
        path: '',
        component: ExcursionsHomeComponent
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
export class ExcursionsHomeRoutingModule { }