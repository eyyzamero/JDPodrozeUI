import { IOrderParticipantAddOrEditReq } from "../../..";

export class OrderParticipantAddOrEditReq implements IOrderParticipantAddOrEditReq {
    
    constructor(
        public id?: number,
        public bookerId?: number,
        public orderId: string = '',
        public name: string = '',
        public surname: string = '',
        public email?: string,
        public telephoneNumber?: string,
        public birthDate: string = '',
        public discount: boolean = false
    ) { }
}