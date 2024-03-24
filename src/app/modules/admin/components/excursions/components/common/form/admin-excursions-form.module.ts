import { NgModule } from "@angular/core";
import { AdminExcursionsFormActiveComponent } from "./components/active/admin-excursions-form-active.component";
import { AdminExcursionsFormDiscountComponent } from "./components/discount/admin-excursions-form-discount.component";
import { AdminExcursionsFormDiscountPriceComponent } from "./components/discount-price/admin-excursions-form-discount-price.component";
import { AdminExcursionsFormInCarouselComponent } from "./components/in-carousel/admin-excursions-form-in-carousel.component";
import { AdminExcursionsFormPriceComponent } from "./components/price/admin-excursions-form-price.component";
import { AdminExcursionsFormSeatsComponent } from "./components/seats/admin-excursions-form-seats.component";
import { AdminExcursionsFormShortDescriptionComponent } from "./components/short-description/admin-excursions-form-short-description.component";
import { AdminExcursionsFormTitleComponent } from "./components/title/admin-excursions-form-title.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AdminExcursionsFormActiveComponent,
        AdminExcursionsFormDiscountComponent,
        AdminExcursionsFormDiscountPriceComponent,
        AdminExcursionsFormInCarouselComponent,
        AdminExcursionsFormPriceComponent,
        AdminExcursionsFormSeatsComponent,
        AdminExcursionsFormShortDescriptionComponent,
        AdminExcursionsFormTitleComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AdminExcursionsFormActiveComponent,
        AdminExcursionsFormDiscountComponent,
        AdminExcursionsFormDiscountPriceComponent,
        AdminExcursionsFormInCarouselComponent,
        AdminExcursionsFormPriceComponent,
        AdminExcursionsFormSeatsComponent,
        AdminExcursionsFormShortDescriptionComponent,
        AdminExcursionsFormTitleComponent
    ]
})
export class AdminExcursionsFormModule { }