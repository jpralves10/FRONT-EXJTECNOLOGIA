import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EnvironmentModel } from "../../entities/environment.model";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable()
export class EnvironmentService {

    public envModel: EnvironmentModel;
    public envModelNull: EnvironmentModel | null;

    constructor(
        private http: HttpClient
    ){}

    public loadEnvironment(): Observable<EnvironmentModel | null>{
        if(this.envModel === null || this.envModel === undefined){
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            headers.set("Access-Control-Allow-Origin", "*")

            return this.http.get('./assets/environment/environment.json', {
                headers: headers,
                observe: 'response'
            }).pipe(
                map((res) =>{
                    if(res){
                        this.envModel = <EnvironmentModel> res.body;
                        return this.envModel;
                    }else{
                        return null;
                    }
                }),
                catchError((err) => {
                    console.error("Erro ao recuperar environment", err);
                    return of(this.envModelNull);
                })
            );
        }else{
            return of(this.envModel);
        }
    }

    public setEnvModel(env: EnvironmentModel){
        if(env === null || env === undefined){
            return;
        }
        this.envModel = env;
    }
}