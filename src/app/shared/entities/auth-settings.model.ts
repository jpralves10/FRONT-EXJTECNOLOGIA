
export class AuthSettingsModel {

    sts_host: string;
    client_id: string;
    redirect_uri: string;
    response_type: string;
    scope: string;    

    constructor(
        sts_host: string,
        client_id: string,
        redirect_uri: string,
        response_type: string,
        scope: string){
            this.sts_host = sts_host;
            this.client_id = client_id;
            this.redirect_uri = redirect_uri;
            this.response_type = response_type;
            this.scope = scope;
        };
}