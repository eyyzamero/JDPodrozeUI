import { IAccountGetListReq } from "../../..";

export class AccountGetListReq implements IAccountGetListReq {

    constructor(
        public searchText: string = ''
    ) { }
}