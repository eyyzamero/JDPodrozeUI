import { IExcursionsAddPickupPointReq } from "src/app/core/contracts";

export class ExcursionsAddPickupPointReq implements IExcursionsAddPickupPointReq {

    constructor(
        public id?: string,
        public name: string = ''
    ) { }
}