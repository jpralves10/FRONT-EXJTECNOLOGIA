import { AuthSettingsModel } from "./auth-settings.model"

export class AppSettingsModel {

    cadastro_application_host: string;
    admin_application_host: string;
    economia_application_host: string;
    contabil_application_host: string;
    authSettings: AuthSettingsModel;

    constructor(
        cadastro_application_host: string,
        admin_application_host: string,
        economia_application_host: string,
        contabil_application_host: string,
        authSettings: AuthSettingsModel){
            this.cadastro_application_host = cadastro_application_host;
            this.admin_application_host = admin_application_host;
            this.economia_application_host = economia_application_host;
            this.contabil_application_host = contabil_application_host;
            this.authSettings = authSettings;
    }
}