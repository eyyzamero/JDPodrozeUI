import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';
import { ExcursionsEnrollFormComponent } from './excursions-enroll-form.component';
import { ExcursionsEnrollForm } from './static';
import { SelectComponent } from 'src/app/modules/common/select/select.component';

describe('ExcursionsEnrollFormComponent', () => {
    let component: ExcursionsEnrollFormComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, ExcursionsEnrollFormComponent, SelectComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExcursionsEnrollFormComponent);
        component = fixture.componentInstance;

        component.form = ExcursionsEnrollForm.getEnrollForm();
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a default participant count of 1', () => {
        expect(component.participantCountCurrent.value).toBe(1);
        const participantsArray = component.getControlAsArrayOfFormGroup('participants');
        expect(participantsArray.length).toBe(0);
    });

    it('should add participant forms when participant count increases', () => {
        const initialParticipants = component.getControlAsArrayOfFormGroup('participants').length;

        const newCountOption = { key: '3', value: 3 };
        component.onParticipantCountChange(newCountOption);

        fixture.detectChanges();

        const updatedParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(updatedParticipants).toBe(2);
        expect(updatedParticipants).toBeGreaterThan(initialParticipants);
    });

    it('should remove participant forms when participant count decreases', () => {
        component.onParticipantCountChange({ key: '3', value: 3 });
        fixture.detectChanges();

        const initialParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(initialParticipants).toBe(2);

        const newCountOption = { key: '1', value: 1 };
        component.onParticipantCountChange(newCountOption);

        fixture.detectChanges();

        const updatedParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(updatedParticipants).toBe(0);
        expect(updatedParticipants).toBeLessThan(initialParticipants);
    });

    it('should correctly handle an increase from zero participants', () => {
        component.onParticipantCountChange({ key: '1', value: 1 });
        fixture.detectChanges();

        const initialParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(initialParticipants).toBe(0);

        const newCountOption = { key: '2', value: 2 };
        component.onParticipantCountChange(newCountOption);

        fixture.detectChanges();

        const updatedParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(updatedParticipants).toBe(1);
    });

    it('should keep the form consistent when participant count remains the same', () => {
        component.onParticipantCountChange({ key: '3', value: 3 });
        fixture.detectChanges();

        const initialParticipants = component.getControlAsArrayOfFormGroup('participants').length;

        const newCountOption = { key: '3', value: 3 };
        component.onParticipantCountChange(newCountOption);

        fixture.detectChanges();

        const updatedParticipants = component.getControlAsArrayOfFormGroup('participants').length;
        expect(updatedParticipants).toBe(initialParticipants);
    });

    it('should render correct number of participant components', () => {
        component.onParticipantCountChange({ key: '3', value: 3 });
        fixture.detectChanges();

        const participantComponents = fixture.nativeElement.querySelectorAll('app-excursions-enroll-form-participant');
        expect(participantComponents.length).toBe(2);
    });

    it('should update the participant count current option when changed', () => {
        const newCountOption = { key: '5', value: 5 };
        component.onParticipantCountChange(newCountOption);

        fixture.detectChanges();

        expect(component.participantCountCurrent).toBe(newCountOption);
    });
});