import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ExcursionImageModel, IExcursionImageModel } from 'src/app/modules/excursions/models';

@Component({
	selector: 'app-admin-excursions-form-images',
	templateUrl: './admin-excursions-form-images.component.html',
	styleUrls: ['./admin-excursions-form-images.component.scss']
})
export class AdminExcursionsFormImagesComponent {

	@Input() excursionId?: number;
	@Input() formArray: FormArray<AbstractControl<IExcursionImageModel>> = new FormArray<AbstractControl<IExcursionImageModel>>([]);

	get images(): Array<IExcursionImageModel> {
		return (this.formArray.value as Array<IExcursionImageModel>).filter(x => !x.deleted);
	}

	constructor(
        private readonly _changeDetectionRef: ChangeDetectorRef
    ) { }

	onFileChange(event: any): void {
		const file = event.target.files[0];
		let reader = new FileReader();

		reader.onloadend = () => {
			let base64String = reader.result as string;
			this.formArray.push(
				new FormControl(
					new ExcursionImageModel(
						0,
						this.excursionId,
						this.formArray.controls.length + 1,
						file.name,
						file.type.replace('image/', ''),
						base64String
					)
				) as FormControl<IExcursionImageModel>
			);
            this._changeDetectionRef.markForCheck();
		};

		if (file)
			reader.readAsDataURL(file);
	}

	onDragStart(event: DragEvent, index: number): void {
		event.dataTransfer?.setData('text/plain', index.toString());
	}

	onDragOver(event: DragEvent): void {
		event.preventDefault();
	}

	onDrop(event: DragEvent, index: number): void {
		event.preventDefault();

		const draggedIndex = +event.dataTransfer!.getData('text/plain');

		if (draggedIndex !== index) {
			const [draggedImage] = (this.formArray.value as Array<ExcursionImageModel>).splice(draggedIndex, 1);
			let images = this.formArray.value as Array<ExcursionImageModel>;
			images.splice(index, 0, draggedImage);
			images.forEach((image, i) => image.order = i);
			this.formArray.setValue(images);
		}
        this._changeDetectionRef.markForCheck();
	}

	onDelete(image: IExcursionImageModel) {
		image.deleted = true;
	}
}