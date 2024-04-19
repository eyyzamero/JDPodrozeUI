import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminOrdersDetailsTableComponent } from "./components/table/admin-orders-details-table.component";
import { AdminOrdersParticipantComponent } from './components/table/components/common/participants/item/admin-orders-participants-item.component';
import { AdminOrdersParticipantsComponent } from "./components/table/components/common/participants/admin-orders-participants.component";
import { AdminOrdersDetailsExcursionInfoComponent } from './components/excursion-info/admin-orders-details-excursion-info.component';
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingSpinnerModule } from "src/app/modules/common/loading-spinner/loading-spinner.module";

@NgModule({
    declarations: [
        AdminOrdersDetailsTableComponent,
        AdminOrdersParticipantComponent,
        AdminOrdersParticipantsComponent,
        AdminOrdersDetailsExcursionInfoComponent
    ],
    imports: [
        CommonModule,
        NgbCollapseModule,
        LoadingSpinnerModule
    ],
    exports: [
        AdminOrdersDetailsTableComponent,
        AdminOrdersDetailsExcursionInfoComponent
    ]
})
export class AdminOrdersDetailsModule { }