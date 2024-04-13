import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class DatesService {

    constructor() { }

    ngbDateToDate(src: NgbDate): string {
		let date = new Date(src.year, src.month - 1, src.day, 0, 0, 0, 0);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().padStart(4, '0');

		const dest = `${day}/${month}/${year}`;
		return dest;
	}

    dateToNgbDate(src: Date): NgbDate {
		const dest = new NgbDate(
			src.getFullYear(),
			src.getMonth() + 1,
			src.getDate()
		);
		return dest;
	}
}