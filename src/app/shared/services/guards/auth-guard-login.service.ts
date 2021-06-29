import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { Observable, of } from "rxjs";
import { Token } from "../../model/token.model";
import { AuthTokenService } from "../auth-token/auth-token.service";
import { SessionManagerService } from "../session-manager/session-manager.service";

@Injectable()
export class AuthGuardLoginService implements CanActivate {

    private readonly notifier: NotifierService;

    constructor(
        protected readonly router: Router,
        protected readonly session: SessionManagerService,
        protected readonly authToken: AuthTokenService,
        protected notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    public canActivate(): Observable<boolean> {

        let tokenLogin = this.session.getTokenLogin() as Token;

        // Authenticação Login.
        if (!tokenLogin) {
            return of(true);
        }

        if(this.authToken.isTokenExpired(tokenLogin.dataTokenInMilis)){
            this.session.clearSession()
            this.showToasty('warning', 'Sessão expirada. Por favor, tente novamente!')
            this.authToken.logoutClient().subscribe(isOK => {});
            this.router.navigate([''])
        }

        this.showToasty('info', 'Usuário já logado!')
        this.router.navigate([''])
        return of(false);
    }

    public showToasty(type:string, message:string): void {
        this.notifier.notify(type, message)
    }
}