import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { Observable, of } from "rxjs";
import { Token } from "../../model/token.model";
import { AuthTokenService } from "../auth-token/auth-token.service";
import { SessionManagerService } from "../session-manager/session-manager.service";

@Injectable()
export class AuthGuardRouterService implements CanActivate {

    private readonly notifier: NotifierService;

    constructor(
        protected readonly router: Router,
        protected readonly session: SessionManagerService,
        protected readonly authToken: AuthTokenService,
        protected readonly notifierService: NotifierService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.notifier = notifierService;
    }

    public canActivate(): Observable<boolean> {

        let tokenLogin = this.session.getTokenLogin() as Token;

        // Authenticação Login.
        if (tokenLogin) {

            if(this.authToken.isTokenExpired(tokenLogin.dataTokenInMilis)){
                this.session.clearSession()
                this.showToasty('warning', 'Sessão expirada. Por favor, tente novamente!')
                this.authToken.logoutClient().subscribe(isOK => {});
                this.router.navigate([''])
            }

            // Get the roles required from the route.
            const requiredRoles = this.activatedRoute.root?.routeConfig?.data?.roles
            const rolesUser = this.session.getProfile()?.roles
        
            if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
                return of(true);
            }

            return of(requiredRoles.every((role) => rolesUser?.includes(role)))       
        }

        this.showToasty('warning', 'Sessão expirada. Por favor, tente novamente!')
        return of(false);
    }

    public showToasty(type:string, message:string): void {
        this.notifier.notify(type, message)
    }
}