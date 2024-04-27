import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExcursionsEnrollComponent } from "./excursions-enroll.component";

const routes: Routes = [
	{
        path: '',
        component: ExcursionsEnrollComponent
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
export class ExcursionsEnrollRoutingModule { }