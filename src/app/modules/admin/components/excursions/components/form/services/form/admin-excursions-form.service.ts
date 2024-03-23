import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class AdminExcursionsFormService {

	get form(): FormGroup {
		return new FormGroup({
			id: new FormControl(null),
			title: new FormControl('', [
				Validators.required,
				Validators.maxLength(255)
			]),
			shortDescription: new FormControl('', [
				Validators.required,
				Validators.maxLength(255)
			]),
			description: new FormControl('', [
				Validators.required
			]),
			active: new FormControl(false),
			dateFrom: new FormControl(null),
			dateTo: new FormControl(null),
			inCarousel: new FormControl(false),
			price: new FormControl(0, [
				Validators.required
			]),
			discount: new FormControl(false, [
				Validators.required
			]),
			discountPrice: new FormControl(0),
            seats: new FormControl(0, {
                validators: [
                    Validators.required
                ]
            }),
			images: new FormArray([])
		});
	}

	constructor() { }
}