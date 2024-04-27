import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExcursionsDetailsComponent } from "./excursions-details.component";

const routes: Routes = [
    {
        path: '',
        component: ExcursionsDetailsComponent
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
export class ExcursionsDetailsRoutingModule { }