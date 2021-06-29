import { Injectable } from "@angular/core";
import { EnvironmentService } from "../environment/environment.service";
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";

@Injectable()
export class ControlPanelWebSocketService {

    private readonly painelControleApiUrl: string;

    constructor(
        private _environmentService: EnvironmentService
    ){
        this.painelControleApiUrl = this.setupApiBaseUrl();
    }

    public abreConexaoWebSocket(): any {
        let ws = new SockJS(`${this.setupDinamicoPainelUrl()}/socket/`);
        return Stomp.over(ws);
    }

    private setupDinamicoPainelUrl(): string {
        return `${this.painelControleApiUrl}/cadastro`;
    }

    private setupApiBaseUrl(): string {
        return `${this._environmentService.envModel.appSettings.exjtecnologia_application_host}`;
    }
}