import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpStatus } from "src/app/shared/constants/http-status.constants";
import { HttpConstants } from "src/app/shared/constants/http.constants";
import { AuthTokenService } from "../../auth-token/auth-token.service";
import { EnvironmentService } from "../../environment/environment.service";
import { SessionManagerService } from "../../session-manager/session-manager.service";

/**
 * Classe que intercepta as requisições Http e executa ações que deverão ser feitas
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(
        private _injector: Injector,
        private session: SessionManagerService
    ){}

    /**
     * Método que intercepta as requisições e adiciona o token no header.
     * Também intercepta a resposta, e, em caso de Http Status 401, redireciona
     * para a tela de Login.
     * 
     * @param request requisição interceptada
     * @param next repassa a requisição para o próximo handler
     */
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        let dupReq = request;
        let model = this._injector.get(EnvironmentService).envModel;
        let headers: HttpHeaders = new HttpHeaders();

        if(model){
            let url = model.appSettings.authSettings.sts_host;
            //Impede que adiciona headers nas requisições para o STS
            if(!request.url.startsWith(url)){
                if(!request.headers.has(HttpConstants.headerAuthorization)){
                    let accessToken = this.session.getTokenLogin();
                    if(accessToken){
                        headers = headers.set(
                            HttpConstants.headerAuthorization,
                            HttpConstants.headerAuthorizationValueBearer + accessToken)
                    }
                }
                if(!request.headers.has(HttpConstants.headerCorrelationID)){
                    headers = headers.set(HttpConstants.headerCorrelationID, this.uuidv4());
                }
                dupReq = request.clone({
                    headers: headers
                })
            }
        }
        return next.handle(dupReq).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (error: HttpErrorResponse) => {
                    if(error.status === HttpStatus.unauthorized){
                        this.session.clearSession();
                        const authTokenService = this._injector.get(AuthTokenService);
                        authTokenService.logoutClient().subscribe(isOK => {});
                    }
                }
            )
        );
    }

    private uuidv4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
}