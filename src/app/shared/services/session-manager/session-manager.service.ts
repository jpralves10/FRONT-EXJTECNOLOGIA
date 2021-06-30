import { Injectable } from "@angular/core";
import { Profile } from "../../model/profile.model";
import { Token } from "../../model/token.model";
import jwtDecode from "jwt-decode";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class SessionManagerService {

    private profileSource: BehaviorSubject<Profile> = new BehaviorSubject(this.getProfile());
    public profile: Observable<Profile> = this.profileSource.asObservable();

    private tokenSource: BehaviorSubject<Token> = new BehaviorSubject(this.getTokenLogin());
    public token: Observable<Token> = this.tokenSource.asObservable();

    private readonly profileKey: string = 'profileKey';
    private readonly tokenLoginKey: string = 'tokenLoginKey';
    private readonly tokenLoginString: string = 'tokenLoginString';
    private readonly refreshLoginKey: string = 'refreshLoginKey';

    constructor(){ }

    /* ProfileKey */

    public setProfile(profile: Profile){
        localStorage.setItem(this.profileKey, JSON.stringify(profile));
        this.profileSource.next(profile);
    }

    public getProfile(): Profile {
        return JSON.parse(localStorage.getItem(this.profileKey) as string);
    }

    /* TokenLoginKey */

    public setTokenLogin(tokenLogin: string){
        let token = jwtDecode<Token>(tokenLogin)
        token.dataTokenInMilis = new Date().getTime()
        localStorage.setItem(this.tokenLoginKey, JSON.stringify(token));
        localStorage.setItem(this.tokenLoginString, tokenLogin);
        this.tokenSource.next(token);

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

    public getTokenLogin(): Token {
        return JSON.parse(localStorage.getItem(this.tokenLoginKey) as string);
    }

    public getTokenLoginString(): string {
        return localStorage.getItem(this.tokenLoginString) as string;
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
        this.profileSource.next(this.getProfile());
        this.tokenSource.next(this.getTokenLogin());
    }
}