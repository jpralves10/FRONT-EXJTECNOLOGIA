import { Location } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthSettingsModel } from "../../entities/auth-settings.model";
import { TokenModel } from "../../entities/token.model";
import { EnvironmentService } from "../environment/environment.service";
import { SessionManagerService } from "../session-manager/session-manager.service";

@Injectable()
export class AuthTokenService {

    private TIMEOUTTOKEN: number = 1200000; //20 min
    private TIMEOUTREFRESH: number = 600000; //10 min

    private authEnv: AuthSettingsModel;
    private tokenServiceUrl = '/auth/realms/realmExj/protocol/openid-connect/token';
    private tokenLogoutUrl = '/auth/realms/realmExj/protocol/openid-connect/logout';

    constructor(
        private http: HttpClient,
        public location: Location,
        private environmentService: EnvironmentService,
        private sessionService: SessionManagerService,
        @Inject('Window') private window: Window,
    ){
        this.authEnv = this.environmentService.envModel.appSettings.authSettings;
    }

    /**
     * Valida Timeout Token
     */
     public isTokenExpired(tokenInMilis: number): boolean {
        const dataAtualInMilis: number = new Date().getTime();
        const dataTokenInMilis = tokenInMilis + this.TIMEOUTTOKEN
        return !dataTokenInMilis ? false : dataTokenInMilis <= dataAtualInMilis
    }

    /**
     * Timeout Token
     */
    public createTokenTimeout(): void {
        let tokenRefresh: any = this.sessionService.getRefreshLogin();
        if(tokenRefresh){
            const timeOut = this.TIMEOUTREFRESH;
            this.window.setTimeout(() => {
                tokenRefresh = <string> this.sessionService.getRefreshLogin();
                this.refreshToken(tokenRefresh).subscribe(isOK => {});
            }, timeOut)
        }
    }

    /**
     * Refresh Token 
     */
    public refreshToken(refreshToken: string): Observable<boolean> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        const body = new HttpParams()
        .set(`grant_type`, 'refresh_token')
        .set(`client_id`, 'exj-microservice')
        .set(`refresh_token`, refreshToken.replace(/['"]+/g, ''));

        this.createTokenTimeout();

        return this.http.post(
            `${this.authEnv.sts_host}${this.tokenServiceUrl}`, body.toString(), { headers }
        )
        .pipe(
            map(res => {
                if(res){
                    //tslint:disable-next-line:no-shadowed-variable
                    const tokenModel = <TokenModel> res;
                    this.sessionService.setTokenLogin(tokenModel.access_token);
                    this.sessionService.setRefreshLogin(tokenModel.refresh_token);                   
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
     * Obter Token 
     */
     public obterToken(username: string, password: string): Observable<boolean> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        const body = new HttpParams()
        .set(`grant_type`, 'password')
        .set(`client_id`, 'exj-microservice')
        .set(`username`, username)
        .set(`password`, password);

        return this.http.post(
            `${this.authEnv.sts_host}${this.tokenServiceUrl}`, body.toString(), { headers }
        )
        .pipe(
            map(res => {
                if(res){
                    //tslint:disable-next-line:no-shadowed-variable
                    const tokenModel = <TokenModel> res;
                    this.sessionService.setTokenLogin(tokenModel.access_token);
                    this.sessionService.setRefreshLogin(tokenModel.refresh_token);                   
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
     * Logout Client
     */
     public logoutClient(): Observable<boolean>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        let refreshToken = this.sessionService.getRefreshLogin()?.replace(/['"]+/g, '')

        const body = new HttpParams()
        .set(`client_id`, 'exj-microservice')
        .set(`refresh_token`, refreshToken);

        return this.http.post(
            `${this.authEnv.sts_host}${this.tokenLogoutUrl}`, body.toString(), { headers }
        )
        .pipe(
            map(res => {
                if(res){
                    this.sessionService.clearSession();                 
                    return true;
                }
                return false;
            }),
            catchError(err => {
                return of(false);
            })
        )
    }
}