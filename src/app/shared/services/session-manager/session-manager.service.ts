import { Injectable } from "@angular/core";
import { Profile } from "../../model/profile.model";
import { Token } from "../../model/token.model";
import jwtDecode from "jwt-decode";

@Injectable()
export class SessionManagerService {

    constructor(){}

    private readonly profileKey: string = 'profileKey';
    private readonly tokenLoginKey: string = 'tokenLoginKey';
    private readonly refreshLoginKey: string = 'refreshLoginKey';
    private readonly tokenAdminKey: string = 'tokenAdminKey';
    private readonly refreshAdminKey: string = 'refreshAdminKey';

    /* ProfileKey */

    public setProfile(profile: Profile){
        localStorage.setItem(this.profileKey, JSON.stringify(profile));
    }

    public getProfile(): Profile | null {
        let profile = localStorage.getItem(this.profileKey);
        return profile ? JSON.parse(profile) : null
    }

    /* TokenLoginKey */

    public setTokenLogin(tokenLogin: string){
        let token = jwtDecode<Token>(tokenLogin)
        token.dataTokenInMilis = new Date().getTime()
        localStorage.setItem(this.tokenLoginKey, JSON.stringify(token));

        let profile: Profile = {
            username: token.preferred_username,
            firstName: token.given_name,
            lastName: token.family_name,
            email: token.email,
            emailVerified: token.email_verified,
            roles: token.realm_access.roles
        }
        this.setProfile(profile);
    }

    public getTokenLogin(): Token | null {
        let tokenLogin = localStorage.getItem(this.tokenLoginKey);
        return tokenLogin ? JSON.parse(tokenLogin) as Token : null
    }

    /* RefreshLoginKey */

    public setRefreshLogin(tokenRefresh: string | undefined){
        localStorage.setItem(this.refreshLoginKey, JSON.stringify(tokenRefresh));
    }

    public getRefreshLogin(): string | any {
        let tokenRefresh = localStorage.getItem(this.refreshLoginKey);
        return tokenRefresh ? tokenRefresh : null
    }

    /* ClearSession */

    public clearSession(): void {
        localStorage.clear();
    }
}