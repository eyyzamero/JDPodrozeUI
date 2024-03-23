import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplatesRoutingModule } from './admin-templates-routing.module';
import { AdminTemplatesComponent } from './admin-templates.component';
import { ExcursionsModule } from '../excursions/admin-excursions.module';

@NgModule({
    declarations: [
        AdminTemplatesComponent
    ],
    imports: [
        CommonModule,
        AdminTemplatesRoutingModule,
        ExcursionsModule
    ]
})
export class AdminTemplatesModule { }