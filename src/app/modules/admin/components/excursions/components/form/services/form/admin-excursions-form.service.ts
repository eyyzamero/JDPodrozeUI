import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class AdminExcursionsFormService {

	get form(): FormGroup {
		return new FormGroup({
			id: new FormControl(null),
			title: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.maxLength(255)
                ]    
            }),
			shortDescription: new FormControl('', {
                validators: [
                    Validators.required,
				    Validators.maxLength(255)
                ]
            }),
			description: new FormControl('', {
                validators: [
				    Validators.required
			    ]
            }),
			active: new FormControl(false),
			dateFrom: new FormControl(null),
			dateTo: new FormControl(null),
			inCarousel: new FormControl(false),
			price: new FormControl(0, {
                validators: [
                    Validators.required
                ]
            }),
			discount: new FormControl(false, {
                validators: [
				    Validators.required
			    ]
            }),
			discountPrice: new FormControl(0),
            seats: new FormControl(0, {
                validators: [
                    Validators.required
                ]
            }),
            template: new FormControl(false),
            pickupPoints: new FormArray([]),
			images: new FormArray([])
		});
	}

	constructor() { }
}