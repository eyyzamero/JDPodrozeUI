import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdminOrdersListComponent } from "./components/list/admin-orders-list.component";
import { AdminOrdersDetailsComponent } from "./components/details/admin-orders-details.component";

const routes: Routes = [
    {
        path: '',
        loadComponent: () => AdminOrdersListComponent
    },
    {
        path: 'details/:excursionId',
        loadComponent: () => AdminOrdersDetailsComponent
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
export class AdminOrdersRoutingModule { }