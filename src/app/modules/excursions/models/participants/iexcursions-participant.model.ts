import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface IExcursionsParticipantModel {
	name: string;
	surname: string;
	birthDate: NgbDate;
	discount: boolean;
}