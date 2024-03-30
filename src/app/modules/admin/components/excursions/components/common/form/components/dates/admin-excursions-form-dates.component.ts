import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-admin-excursions-form-dates',
	templateUrl: './admin-excursions-form-dates.component.html',
	styleUrls: ['./admin-excursions-form-dates.component.scss']
})
export class AdminExcursionsFormDatesComponent {

	hoveredDate: NgbDate | null = null;

	@Input() dateFromControl: AbstractControl<NgbDate | null> = new FormControl<NgbDate | null>(null);
	@Input() dateToControl: AbstractControl<NgbDate | null> = new FormControl<NgbDate | null>(null);

	constructor(
		public formatter: NgbDateParserFormatter,
		private calendar: NgbCalendar,
	) { }

	onDateSelection(date: NgbDate): void {
		if (!this.dateFromControl.value && !this.dateToControl.value) {
			this.dateFromControl.setValue(date);
		} else if (this.dateFromControl.value && !this.dateToControl.value && date && date.after(this.dateFromControl.value)) {
			this.dateToControl.setValue(date);
		} else {
			this.dateToControl.setValue(null);
			this.dateFromControl.setValue(date);
		}
	}

	isHovered(date: NgbDate): boolean | null {
		return (
			this.dateFromControl.value && !this.dateToControl.value && this.hoveredDate && date.after(this.dateFromControl.value) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate): boolean | null {
		return this.dateToControl.value && date.after(this.dateFromControl.value) && date.before(this.dateToControl.value);
	}

	isRange(date: NgbDate): boolean | null {
		return (
			date.equals(this.dateFromControl.value) ||
			(this.dateToControl.value && date.equals(this.dateToControl.value)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
}