export class AuthIsLoginAvailableReq {

    constructor(
        public login: string = '',
        public currentLogin?: string
    ) { }
}