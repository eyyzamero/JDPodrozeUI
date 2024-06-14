import { IExcursionPickupPointModel } from "..";

export class ExcursionPickupPointModel implements IExcursionPickupPointModel {

    constructor(
        public id?: string,
        public name: string = ''
    ) { }
}