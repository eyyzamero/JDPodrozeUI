import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExcursionsEnrollShowcaseComponent } from "./components/showcase/excursions-enroll-showcase.component";
import { ExcursionsEnrollRoutingModule } from "./excursions-enroll-routing.module";
import { ExcursionsEnrollComponent } from "./excursions-enroll.component";
import { LoadingSpinnerModule } from "src/app/modules/common/loading-spinner/loading-spinner.module";
import { ExcursionsEnrollFormComponent } from "../common/enroll-form/excursions-enroll-form.component";

@NgModule({
    declarations: [
        ExcursionsEnrollShowcaseComponent,
        ExcursionsEnrollComponent
    ],
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        ExcursionsEnrollFormComponent,
        ExcursionsEnrollRoutingModule
    ]
})
export class ExcursionsEnrollModule { }