import { ISelectOptionModel } from ".";

export class SelectOptionModel<T> implements ISelectOptionModel<T> {

    constructor(
        public key: string = '',
        public value: T
    ) { }
}