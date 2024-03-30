import { NgModule } from "@angular/core";
import { AdminExcursionsFormDiscountPriceComponent } from "./components/discount-price/admin-excursions-form-discount-price.component";
import { AdminExcursionsFormPriceComponent } from "./components/price/admin-excursions-form-price.component";
import { AdminExcursionsFormSeatsComponent } from "./components/seats/admin-excursions-form-seats.component";
import { AdminExcursionsFormShortDescriptionComponent } from "./components/short-description/admin-excursions-form-short-description.component";
import { AdminExcursionsFormTitleComponent } from "./components/title/admin-excursions-form-title.component";
import { CommonModule } from "@angular/common";
import { AdminExcursionsFormEditorComponent } from "./components/editor/admin-excursions-form-editor.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgbDateParserFormatter, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateFormatterService } from "src/app/core/formatters/ngb-date/ngb-date-formatter.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminExcursionsFormImagesComponent } from "./components/images/admin-excursions-form-images.component";
import { AdminExcursionsFormCheckboxComponent } from './components/checkbox/admin-excursions-form-checkbox.component';
import { AdminExcursionsFormDatesComponent } from "./components/dates/admin-excursions-form-dates.component";

@NgModule({
    declarations: [
        AdminExcursionsFormDiscountPriceComponent,
        AdminExcursionsFormPriceComponent,
        AdminExcursionsFormSeatsComponent,
        AdminExcursionsFormShortDescriptionComponent,
        AdminExcursionsFormTitleComponent,
        AdminExcursionsFormEditorComponent,
        AdminExcursionsFormImagesComponent,
        AdminExcursionsFormCheckboxComponent,
        AdminExcursionsFormDatesComponent
    ],
    imports: [
        CommonModule,
        CKEditorModule,
        ReactiveFormsModule,
        NgbDatepickerModule
    ],
    exports: [
        AdminExcursionsFormDiscountPriceComponent,
        AdminExcursionsFormPriceComponent,
        AdminExcursionsFormSeatsComponent,
        AdminExcursionsFormShortDescriptionComponent,
        AdminExcursionsFormTitleComponent,
        AdminExcursionsFormEditorComponent,
        AdminExcursionsFormImagesComponent,
        AdminExcursionsFormCheckboxComponent,
        AdminExcursionsFormDatesComponent
    ],
    providers: [
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateFormatterService
        }
    ]
})
export class AdminExcursionsFormModule { }