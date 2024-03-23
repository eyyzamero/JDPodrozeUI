import { Component } from '@angular/core';
import { ExcursionsGetListReq, IExcursionsGetListReq } from 'src/app/core/contracts';

@Component({
    selector: 'app-admin-templates',
    templateUrl: './admin-templates.component.html',
    styleUrls: ['./admin-templates.component.scss']
})
export class AdminTemplatesComponent {

    req: IExcursionsGetListReq = new ExcursionsGetListReq(undefined, null, true);

    constructor() { }
}