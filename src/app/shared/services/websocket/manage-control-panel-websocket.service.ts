import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { SessionManagerService } from "../session-manager/session-manager.service";
import { ControlErrorPanelSubjectService } from "./control-error-panel-subject.service";
import { ControlPanelWebSocketService } from "./control-panel-websocket.service";

interface ObjetoASerAtualizado {
    codigo: string
    nome: string
}

@Injectable()
export class ManageControlPanelWebSocketService {

    private inscricaoValoresWebSocket: Subscription;
    private stompClient: any;

    constructor(
        private _controlPanelWebSocketService: ControlPanelWebSocketService,
        private _sessionMangerService: SessionManagerService,
        private _controlErrorPanelSubjectService: ControlErrorPanelSubjectService
    ){}

    public buscaDadoDinamicoWebSocket(objetos: ObjetoASerAtualizado[]): void {
        this.stompClient = this._controlPanelWebSocketService.abreConexaoWebSocket();
        this.stompClient.debug = null;
        var that = this;

        this.stompClient.connect({ "X-Authorization": this._sessionMangerService.getAccessToken()}, 
        function(frame:any){
            that.inscricaoValoresWebSocket = new Subscription();
            [
                {rota: '/valor/suficiencia/atualizacao/online', campo: 'valorSuficiencia'},
                {rota: '/acao/sugerida/atualizacao/online', campo: 'acaoSugerida'},
                {rota: '/valor/liquidado/atualizacao/online', campo: 'valorLiquidado'},
                {rota: '/status/atualizacao/online', campo: 'status'},
            ].forEach(el => that.inscricaoValoresWebSocket.add(
                that.chamadasListeners(that.stompClient, el.rota, objetos)))
        },
        () => this._controlErrorPanelSubjectService.lancarErro());
    }

    private chamadasListeners(stompClient: any, rota: string, objetos: ObjetoASerAtualizado[]){
        return stompClient.subscribe(rota, (message:any) => {
            /* Console log para ver as mensagens chegando / console.log(message.body); */
            if(message.body){
                this.camposWebSocketAlteraPainel(JSON.parse(message.body), objetos);
            }
        },
        () => this._controlErrorPanelSubjectService.lancarErro());
    }

    /**
     * dadoDinamico do websocket atualiza os objetos do frontEnd
     */
    private camposWebSocketAlteraPainel(dadoDinamicoBackEnd: any, objetos: ObjetoASerAtualizado[]){
        const indexValue = objetos.findIndex(el2 => el2.codigo === dadoDinamicoBackEnd.codigo);
        if(indexValue != -1){
            objetos[indexValue]['codigo'] = dadoDinamicoBackEnd['codigo'];
            objetos[indexValue]['nome'] = dadoDinamicoBackEnd['nome'];
        }
    }

    private unsubscribeWebSocket(): void {
        if(this.inscricaoValoresWebSocket){this.inscricaoValoresWebSocket.unsubscribe()};
        if(this.stompClient){this.stompClient.disconnect()};
    }
}