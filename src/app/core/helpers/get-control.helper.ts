import { AbstractControl, FormGroup } from "@angular/forms";

export function getControl<T extends AbstractControl>(form: FormGroup, controlName: string): T {
    const control = form.get(controlName);

    if (!control)
        throw new Error(`Control '${controlName}' not found in FormGroup`);

    return control as T;
}