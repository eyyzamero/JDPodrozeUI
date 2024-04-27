import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExcursionsEnrollSuccessComponent } from "./excursions-enroll-success.component";
import { ExcursionsEnrollSuccessRoutingModule } from "./excursions-enroll-success-routing.module";

@NgModule({
    declarations: [
        ExcursionsEnrollSuccessComponent
    ],
    imports: [
        CommonModule,
        ExcursionsEnrollSuccessRoutingModule
    ]
})
export class ExcursionsEnrollSuccessModule { }