export interface IOrderParticipantAddOrEditReq {
    id?: number;
    bookerId?: number;
    orderId: string;
    name: string;
    surname: string;
    email?: string;
    telephoneNumber?: string;
    birthDate: string;
    discount: boolean;
}