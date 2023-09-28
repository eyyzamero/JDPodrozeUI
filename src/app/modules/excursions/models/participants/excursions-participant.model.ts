import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { IExcursionsParticipantModel } from '..';

export class ExcursionsParticipantModel implements IExcursionsParticipantModel {

	constructor(
		public name: string = '',
		public surname: string = '',
		public birthDate: NgbDate,
		public discount: boolean = false
	) { }
}