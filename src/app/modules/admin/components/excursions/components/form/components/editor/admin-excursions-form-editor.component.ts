import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
	selector: 'app-admin-excursions-form-editor',
	templateUrl: './admin-excursions-form-editor.component.html',
	styleUrls: ['./admin-excursions-form-editor.component.scss']
})
export class AdminExcursionsFormEditorComponent {

	@Input() control: FormControl<string | null> = new FormControl<string>('');

	editor = DecoupledEditor;
	editorConfig = {
		toolbar: [ 'undo', 'redo', 'heading', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', 'bold', 'italic', 'strikethrough', 'underline', 'alignment', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'insertTable']
	};

	constructor() { }

	onEditorReady(editor: DecoupledEditor): void {
		const element = editor.ui.getEditableElement()!;
		const parent = element.parentElement!;

		parent.insertBefore(
			editor.ui.view.toolbar.element!,
			element
		);
	}
}