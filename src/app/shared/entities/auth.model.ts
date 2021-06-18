
export class AuthModel {

    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    id_token: string;
    active: boolean;

    dataTokenInMilis: number;

    constructor(
        access_token: string,
        token_type: string,
        expires_in: number,
        refresh_token: string,
        scope: string,
        id_token: string,
        active: boolean,
        dataTokenInMilis: number){
            this.access_token = access_token;
            this.token_type = token_type;
            this.expires_in = expires_in;
            this.refresh_token = refresh_token;
            this.scope = scope;
            this.id_token = id_token;
            this.active = active;
            this.dataTokenInMilis = dataTokenInMilis;
        }
    
    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}