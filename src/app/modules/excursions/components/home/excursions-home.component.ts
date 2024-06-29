import { Component, OnInit } from '@angular/core';
import { ExcursionsHttpService } from '../../services/http/excursions-http.service';
import { ExcursionsDataService } from '../../services/data/excursions-data.service';

@Component({
    selector: 'app-excursions-home',
    templateUrl: './excursions-home.component.html',
    styleUrls: ['./excursions-home.component.scss']
})
export class ExcursionsHomeComponent implements OnInit {

    constructor(
        private readonly _excursionsHttpService: ExcursionsHttpService,
        private readonly _excursionsDataService: ExcursionsDataService
    ) { }

    ngOnInit(): void {
        this._getData();
    }

    private _getData(): void {
        if(!this._excursionsDataService.currentValue.data?.length)
            this._excursionsHttpService.getExcursionsListShort();
    }
}