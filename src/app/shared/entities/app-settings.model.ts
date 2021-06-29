import { AuthSettingsModel } from "./auth-settings.model"

export class AppSettingsModel {

    exjtecnologia_application_host: string;
    exjfinanceiro_application_host: string;
    authSettings: AuthSettingsModel;

    constructor(
        exjtecnologia_application_host: string,
        exjfinanceiro_application_host: string,
        authSettings: AuthSettingsModel){
            this.exjtecnologia_application_host = exjtecnologia_application_host;
            this.exjfinanceiro_application_host = exjfinanceiro_application_host;
            this.authSettings = authSettings;
    }
}