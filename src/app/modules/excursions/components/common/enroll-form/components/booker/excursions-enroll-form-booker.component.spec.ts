import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollFormBookerComponent } from './excursions-enroll-form-booker.component';
import { ExcursionsEnrollForm } from '../../static';

describe('ExcursionsEnrollFormBookerComponent', () => {
    let component: ExcursionsEnrollFormBookerComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, ExcursionsEnrollFormBookerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerComponent);
        component = fixture.componentInstance;

        component.form = ExcursionsEnrollForm.getBookerForm();
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
            email: 'john.doe@example.com',
            telephone: '+48123456789',
            birthDate: { year: 1990, month: 1, day: 1 },
            discount: true,
        });

        expect(component.form.valid).toBeTrue();
    });

    it('Should mark form as invalid when required fields are missing', () => {
        component.form.patchValue({
            name: '',
            surname: '',
            email: '',
            telephone: '',
            birthDate: null,
            discount: false,
        });

        expect(component.form.invalid).toBeTrue();
        expect(component.form.controls['name'].hasError('required')).toBeTrue();
        expect(component.form.controls['surname'].hasError('required')).toBeTrue();
        expect(component.form.controls['email'].hasError('required')).toBeTrue();
        expect(component.form.controls['telephone'].hasError('required')).toBeTrue();
        expect(component.form.controls['birthDate'].hasError('required')).toBeTrue();
    });

    it('Should get control by name using getControl method', () => {
        const nameControl = component.getControl('name');
        expect(nameControl).toBeDefined();
        expect(nameControl.value).toEqual('');
    });

    it('Should validate email format', () => {
        const emailControl = component.getControl('email');
        emailControl.setValue('invalid-email');
        expect(emailControl.hasError('email')).toBeTrue();

        emailControl.setValue('valid.email@example.com');
        expect(emailControl.hasError('email')).toBeFalse();
    });

    it('Should validate telephone pattern', () => {
        const telephoneControl = component.getControl('telephone');
        telephoneControl.setValue('1234');
        expect(telephoneControl.hasError('pattern')).toBeTrue();

        telephoneControl.setValue('+48123456789');
        expect(telephoneControl.hasError('pattern')).toBeFalse();
    });

    it('Should handle the discount input correctly', () => {
        component.discount = true;
        fixture.detectChanges();

        const discountControl = component.getControl('discount');
        expect(discountControl.value).toBeFalse();

        discountControl.setValue(true);
        expect(discountControl.value).toBeTrue();
    });
});
