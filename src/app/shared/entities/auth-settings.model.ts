
export class AuthSettingsModel {

    disable_security: boolean;
    redirect_uri: string;
    response_mode: string;
    grant_type: string;
    response_type: string;
    resource: string;
    nonce: string;
    sts_host: string;
    sts_proxy_host: string;
    client_id: string;
    client_secret: string;
    scope: string;

    constructor(
        disable_security: boolean,
        redirect_uri: string,
        response_mode: string,
        grant_type: string,
        response_type: string,
        resource: string,
        nonce: string,
        sts_host: string,
        sts_proxy_host: string,
        client_id: string,
        client_secret: string,
        scope: string){
            this.disable_security = disable_security;
            this.redirect_uri = redirect_uri;
            this.response_mode = response_mode;
            this.grant_type = grant_type;
            this.response_type = response_type;
            this.resource = resource;
            this.nonce = nonce;
            this.sts_host = sts_host;
            this.sts_proxy_host = sts_proxy_host;
            this.client_id = client_id;
            this.client_secret = client_secret;
            this.scope = scope;
        };
}