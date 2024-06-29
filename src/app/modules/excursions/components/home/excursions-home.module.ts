import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcursionsHomeRoutingModule } from './excursions-home-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ExcursionsCarouselComponent } from '../common/carousel/excursions-carousel.component';

import { ExcursionsHomeListItemComponent } from './components/list/components/item/excursions-home-list-item.component';
import { ExcursionsHomeListComponent } from './components/list/excursions-home-list.component';
import { ExcursionsHomeCarouselComponent } from './components/carousel/excursions-home-carousel.component';
import { ExcursionsHomeNewsletterComponent } from './components/newsletter/excursions-home-newsletter.component';
import { ExcursionsHomeComponent } from './excursions-home.component';

@NgModule({
    declarations: [
        ExcursionsHomeCarouselComponent,
        ExcursionsHomeListItemComponent,
        ExcursionsHomeListComponent,
        ExcursionsHomeNewsletterComponent,
        ExcursionsHomeComponent
    ],
    imports: [
        CommonModule,
        ExcursionsCarouselComponent,
        LoadingSpinnerModule,
        ReactiveFormsModule,
        ExcursionsHomeRoutingModule
    ]
})
export class ExcursionsHomeModule { }