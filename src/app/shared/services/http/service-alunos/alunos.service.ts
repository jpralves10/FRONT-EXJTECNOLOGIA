import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Aluno } from "src/app/shared/model/aluno.model";
import { EnvironmentService } from "../../environment/environment.service";
import { SessionManagerService } from "../../session-manager/session-manager.service";

@Injectable()
export class AlunosService {

    private readonly alunosApiVersion: string = "v1";
    private readonly alunosApiBaseUrl: string;

    constructor(
        private http: HttpClient,
        private environmentService: EnvironmentService,
        private sessionManagerService: SessionManagerService
    ){
        this.alunosApiBaseUrl = this.setupApiBaseUrl();
    }

    public incluirAluno(aluno: Aluno): Observable<Aluno>{
        return this.http.post<Aluno>(`${this.setupAlunosUrl()}`, aluno).pipe(map((res:Aluno) => {
            return res;
        }))
    }

    public desativarAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(`${this.setupAlunosUrl}/desativar`, aluno).pipe(map((res:Aluno) => {
            return res;
        }))
    }

    public obterAlunoCurso(idAluno: number, idCurso: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${this.setupAlunosCursoGetUrl(idAluno, idCurso)}`)
    }

    //Privates

    private setupAlunosCursoGetUrl(idAluno: number, idCurso: number): string {
        return `${this.setupAlunosUrl()}/aluno-curso/${idAluno}/${idCurso}`;
    }

    private setupAlunosUrl(): string {
        return `${this.alunosApiBaseUrl}/alunos`
    }

    private setupApiBaseUrl(): string {
        return `${this.environmentService.envModel.appSettings
            .exjtecnologia_application_host}/${this.alunosApiVersion}`;
    }
}