import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExcursionsEnrollComponent } from "./excursions-enroll.component";

const routes: Routes = [
    {
        path: 'success',
        loadChildren: () => import('./components/success/excursions-enroll-success.module').then(m => m.ExcursionsEnrollSuccessModule)
    },
    {
        path: ':excursionId',
        component: ExcursionsEnrollComponent
    },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ExcursionsEnrollRoutingModule { }