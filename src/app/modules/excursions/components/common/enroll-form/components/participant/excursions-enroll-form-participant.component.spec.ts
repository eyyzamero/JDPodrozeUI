import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollFormParticipantComponent } from './excursions-enroll-form-participant.component';
import { ExcursionsEnrollForm } from '../../static';

describe('ExcursionsEnrollFormParticipantComponent', () => {
    let component: ExcursionsEnrollFormParticipantComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormParticipantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, ExcursionsEnrollFormParticipantComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantComponent);
        component = fixture.componentInstance;

        component.form = ExcursionsEnrollForm.getParticipantForm();
        fixture.detectChanges();
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should have a valid form by default', () => {
        expect(component.form).toBeDefined();
        expect(component.form.valid).toBeFalse();
    });

    it('Should mark form as valid when all fields are correctly filled', () => {
        component.form.patchValue({
            name: 'John',
            surname: 'Doe',
            birthDate: { year: 1990, month: 1, day: 1 },
            discount: true,
        });

        expect(component.form.valid).toBeTrue();
    });

    it('Should mark form as invalid when required fields are missing', () => {
        component.form.patchValue({
            name: '',
            surname: '',
            birthDate: null,
            discount: false,
        });

        expect(component.form.invalid).toBeTrue();
        expect(component.form.controls['name'].hasError('required')).toBeTrue();
        expect(component.form.controls['surname'].hasError('required')).toBeTrue();
        expect(component.form.controls['birthDate'].hasError('required')).toBeTrue();
    });

    it('Should render the participant index if provided', () => {
        component.index = 1;
        fixture.detectChanges();
        const headerElement = fixture.nativeElement.querySelector('.excursions-enroll-form-participant-header');
        expect(headerElement).toBeTruthy();
        expect(headerElement.textContent).toContain('Dane uczestnika # 1');
    });

    it('Should not render the participant index if not provided', () => {
        component.index = undefined;
        fixture.detectChanges();
        const headerElement = fixture.nativeElement.querySelector('.excursions-enroll-form-participant-header');
        expect(headerElement).toBeNull();
    });

    it('Should get control by name using getControl method', () => {
        const nameControl = component.getControl('name');
        expect(nameControl).toBeDefined();
        expect(nameControl.value).toEqual('');
    });

    it('Should validate name field correctly', () => {
        const nameControl = component.getControl('name');
        nameControl.setValue('');
        expect(nameControl.hasError('required')).toBeTrue();

        nameControl.setValue('Valid Name');
        expect(nameControl.hasError('required')).toBeFalse();
        expect(nameControl.hasError('maxLength')).toBeFalse();
    });

    it('Should show discount field only if discount input is true', () => {
        component.discount = true;
        fixture.detectChanges();
        const discountField = component.getControl('discount');
        expect(discountField).toBeDefined();
        expect(discountField.value).toBeFalse();

        component.discount = false;
        fixture.detectChanges();
        const discountElement = fixture.nativeElement.querySelector('app-excursions-enroll-form-participant-discount');
        expect(discountElement).toBeNull();
    });

    it('Should validate birthDate as required', () => {
        const birthDateControl = component.getControl('birthDate');
        birthDateControl.setValue(null);
        expect(birthDateControl.hasError('required')).toBeTrue();

        birthDateControl.setValue({ year: 2000, month: 1, day: 1 });
        expect(birthDateControl.hasError('required')).toBeFalse();
    });
});