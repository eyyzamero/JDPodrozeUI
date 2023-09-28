export interface IAdminOrdersExcursionOrderParticipantModel {
	id: number;
	bookerId?: number;
	name: string;
	surname: string;
	email?: string;
	telephoneNumber?: string;
	birthDate?: Date;
	discount: boolean;
}