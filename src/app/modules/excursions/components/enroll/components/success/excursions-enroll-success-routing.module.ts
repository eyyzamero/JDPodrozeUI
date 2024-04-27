import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExcursionsEnrollSuccessComponent } from "./excursions-enroll-success.component";

const routes: Routes = [
    {
        path: '',
        component: ExcursionsEnrollSuccessComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExcursionsEnrollSuccessRoutingModule { }