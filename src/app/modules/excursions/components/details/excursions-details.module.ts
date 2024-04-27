import { NgModule } from "@angular/core";
import { ExcursionsDetailsComponent } from "./excursions-details.component";
import { ExcursionsDetailsImagesComponent } from "./components/images/excursions-details-images.component";
import { CommonModule } from "@angular/common";
import { ExcursionsDetailsRoutingModule } from "./excursions-details-routing.module";
import { LoadingSpinnerModule } from "src/app/modules/common/loading-spinner/loading-spinner.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule } from "@angular/forms";
import { ExcursionsCarouselComponent } from "../common/carousel/excursions-carousel.component";
import { ExcursionsDetailsMapperService } from "./services/mapper/excursions-details-mapper.service";

@NgModule({
    declarations: [
        ExcursionsDetailsImagesComponent,
        ExcursionsDetailsComponent
    ],
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        FormsModule,
        CKEditorModule,
        ExcursionsCarouselComponent,
        ExcursionsDetailsRoutingModule
    ],
    providers: [
        ExcursionsDetailsMapperService
    ]
})
export class ExcursionsDetailsModule { }