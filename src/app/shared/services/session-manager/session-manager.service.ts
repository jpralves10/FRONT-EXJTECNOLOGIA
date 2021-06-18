import { Injectable } from "@angular/core";
import { AuthModel } from "../../entities/auth.model";
import { PermissoesUsuario } from "../../model/permissoes-usuario";
import { Token } from "../../model/token.model";
import jwtDecode, * as jwt from 'jwt-decode';

@Injectable()
export class SessionManagerService {

    constructor(){}

    private readonly authModelKey: string = 'authModel';
    private readonly permissaoModelKey: string = 'permissaoModel';

    /* AuthModel */

    public setAuthModel(authModel: AuthModel){
        localStorage.setItem(this.authModelKey, JSON.stringify(authModel));
    }

    public getAuthModel(): AuthModel | null {
        let authModel = localStorage.getItem(this.authModelKey);
        if(authModel){
            return JSON.parse(authModel)
        }
        return null;
    }

    /* PermissaoUsuario */

    public setPermissao(per: Array<PermissoesUsuario>){
        localStorage.setItem(this.permissaoModelKey, JSON.stringify(per))
    }

    public getPermissao(): Array<PermissoesUsuario> | null {
        let permissao = localStorage.getItem(this.permissaoModelKey);
        if(permissao){
            return JSON.parse(permissao)
        }
        return null;
    }

    /* AccessToken */

    public getAccessToken(): string | null {
        let authModel = this.getAuthModel();
        if(authModel){
            return authModel.access_token;
        }
        return null;
    }

    /* UsuarioLogado */

    public getUsuarioLogado(): string | undefined {
        return this.decodeTokenAndGetUser();
    }

    private decodeTokenAndGetUser(): string | undefined{
        let token = this.getAccessToken();
        if(token){
            return jwtDecode<Token>(token).usr;
        }
        return;
    }

    /* ClearSession */

    public deleteAccessToken(): void {
        localStorage.removeItem(this.authModelKey);
        localStorage.removeItem(this.permissaoModelKey);
    }

    public clearSession(): void {
        localStorage.clear();
    }
}