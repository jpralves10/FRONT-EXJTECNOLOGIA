import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthModel } from "../../entities/auth.model";
import { AuthTokenService } from "../auth/auth-token.service";
import { SessionManagerService } from "../session-manager/session-manager.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    public code: string | any;
    private MULTIPLICADOR: number = 1000;

    constructor(
        public router: Router,
        public sessionService: SessionManagerService,
        public authTokenService: AuthTokenService
    ){}

    public canActivate(): Observable<boolean> {
        this.code = this.authTokenService.getParamValueQueryString('code');
        const authModel = this.sessionService.getAuthModel();

        if(!authModel){
            if(!this.code){
                return this.redirectLogin();
            }
            return this.authTokenService.createAccessModel(
                this.code,
                this.authTokenService.getPathValue()
            );
        }

        if(this.isTokenExpired(authModel)){
            this.sessionService.deleteAccessToken();
            return this.redirectLogin();
        }
        return this.authTokenService.validateAccessModel(authModel);
    }

    private isTokenExpired(authModel: AuthModel): boolean {
        const dataAtualInMilis: number = new Date().getTime();
        if(!authModel.dataTokenInMilis){
            return false;
        }
        return(
            authModel.dataTokenInMilis + 
            authModel.expires_in * 
            this.MULTIPLICADOR <= dataAtualInMilis
        )
    }

    private redirectLogin(): Observable<boolean> {
        this.authTokenService.redirectLogin('/');
        return of(false)
    }
}