import { IAdminOrdersExcursionOrderParticipantModel } from '../../..';

export class AdminOrdersExcursionOrderParticipantModel implements IAdminOrdersExcursionOrderParticipantModel {

	constructor(
		public id: number = 0,
		public name: string = '',
		public surname: string = '',
		public discount: boolean = false,
		public birthDate?: Date,
		public email?: string,
		public bookerId?: number,
		public telephoneNumber?: string
	) { }
}