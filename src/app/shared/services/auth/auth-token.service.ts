import { Location } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthSettingsModel } from "../../entities/auth-settings.model";
import { AuthModel } from "../../entities/auth.model";
import { PermissoesUsuario } from "../../model/permissoes-usuario";
import { EnvironmentService } from "../env/environment.service";
import { SessionManagerService } from "../session-manager/session-manager.service";

@Injectable()
export class AuthTokenService {

    private readonly constractApiVersion: string = 'v1';

    public permissao: Array<PermissoesUsuario>;
    private authEnv: AuthSettingsModel;
    private loginServiceUrl = '/services/oauth/authorize';
    private tokenServiceUrl = '/api/oauth/token';
    private validateServiceUrl = '/api/oauth/tokeninfo';

    constructor(
        private http: HttpClient,
        private sessionService: SessionManagerService,
        public location: Location,
        private environmentService: EnvironmentService,
        @Inject('Window') private window: Window
    ){
        this.authEnv = this.environmentService.envModel.appSettings.authSettings;
        this.permissao = new Array();
    }

    /**
     * Método que envia a aplicação para a página de login do provider de autenticação.
     * Nesse passo é gerado o authorization code.
     */
    public redirectLogin(pathValue: string){
        this.window.location.replace(
            `${this.authEnv.sts_host}${this.loginServiceUrl}
            ?client_id=${this.authEnv.client_id}
            &redirect_uri=${this.authEnv.redirect_uri}
            &response_type=${this.authEnv.response_type}
            &scope=${this.authEnv.scope}`
        );
    }

    /**
     * Método responsável por chamar o provider de autenticação com o authorization code e receber
     * o access code que será repassado às apis.
     */
    public createAccessModel(loginCode:string, pathValue:string): Observable<boolean>{
        const request = {
            authorizationCode: loginCode,
            redirectUri: this.authEnv.redirect_uri
        };

        return this.http.post<AuthModel>(
            `${this.environmentService.envModel.appSettings.cadastro_application_host}
            ${this.tokenServiceUrl}`,
            request
        )
        .pipe(
            map(res => {
                if(res){
                    const authModel = <AuthModel> res;
                    authModel.dataTokenInMilis = new Date().getTime();
                    this.sessionService.setAuthModel(authModel);
                    return true;
                }
                return false;
            }),
            catchError(err => {
                return of(false)
            })
        );
    }

    public getUsuarioLogado(): string | undefined {
        return this.sessionService.getUsuarioLogado();
    }

    /**
     * Método responsável por validar o AccessModel gerado no passado de geração do AccessCode
     */
    public validateAccessModel(model: AuthModel): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const body = new HttpParams().set('access_token', model.access_token);

        return this.http.post(
            `${this.authEnv.sts_proxy_host}${this.validateServiceUrl}`, body, {headers})
            .pipe(
                map(res => {
                    if(res){
                        return true;
                    }
                    return false;
                }),
                catchError(err => {
                    return of(false);
                })
            );
    }

    /**
     * Timeout Token
     */
    public createTokenTimeout(): void {
        let authModel: AuthModel | null = this.sessionService.getAuthModel();
        if(authModel){
            const timeOut = authModel.expires_in * 900;
            this.window.setTimeout(() => {
                authModel = <AuthModel> this.sessionService.getAuthModel();
                this.refreshToken(authModel).subscribe(isOK => {});
            }, timeOut)
        }
    }

    /**
     * Refresh Token 
     */
    public refreshToken(authModel: AuthModel): Observable<boolean> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const refreshToken = authModel.refresh_token;

        this.createTokenTimeout();

        return this.http.put<AuthModel>(
            `${this.environmentService.envModel.appSettings.cadastro_application_host}${this.tokenServiceUrl}`,
            refreshToken,
            {headers}
        )
        .pipe(
            map(res => {
                if(res){
                    //tslint:disable-next-line:no-shadowed-variable
                    const authModel = <AuthModel> res;
                    authModel.dataTokenInMilis = new Date().getTime();
                    this.sessionService.setAuthModel(authModel);
                    return true;
                }
                return false;
            }),
            catchError(err => {
                return of(false);
            })
        )
    }

    /**
     * Método responsável por invalidar o sessão
     * e como consequência a autenticação do usuário
     */
    public redirectLogout(){
        this.sessionService.clearSession();
        this.redirectLogin('');
    }

    public clearUrl(){
        this.location.replaceState(this.location.path().split('?')[0], '');
    }

    public getParamValueQueryString(paramName:string): string | any {
        const url = this.window.location.href;
        let paramValue;
        if(url.includes('?')){
            const httpParams = new HttpParams({fromString: url.split('?')[1]});
            paramValue = httpParams.get(paramName);
        }
        return paramValue;
    }

    public getPathValue():string {
        return this.window.location.pathname;
    }
}