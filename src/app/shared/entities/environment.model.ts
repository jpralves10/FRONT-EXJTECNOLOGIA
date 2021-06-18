import { AppSettingsModel } from "./app-settings.model"

export class EnvironmentModel {

    prduction: boolean;
    name: string;
    urlExJ: string;
    appSettings: AppSettingsModel;

    constructor(
        prduction: boolean,
        name: string,
        urlExJ: string,
        appSettings: AppSettingsModel){
            this.prduction = prduction;
            this.name = name;
            this.urlExJ = urlExJ;
            this.appSettings = appSettings;
        }
}