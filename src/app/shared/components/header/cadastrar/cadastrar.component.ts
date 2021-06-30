import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthSettingsModel } from 'src/app/shared/entities/auth-settings.model';
import { Profile } from 'src/app/shared/model/profile.model';
import { AuthTokenService } from 'src/app/shared/services/auth-token/auth-token.service';
import { EnvironmentService } from 'src/app/shared/services/environment/environment.service';
import { SessionManagerService } from 'src/app/shared/services/session-manager/session-manager.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  readonly notifier: NotifierService;
  formCadastrar: FormGroup;
  listaTipoSpinner: string[];
  nomeTipoSpinner: string;
  authEnv: AuthSettingsModel;

  readonly regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(
    protected notifierService: NotifierService,
    protected authTokenService: AuthTokenService,
    private sessionService: SessionManagerService,
    private environmentService: EnvironmentService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.notifier = notifierService,
    this.authEnv = this.environmentService.envModel.appSettings.authSettings;
  }

  ngOnInit(): void {
    this.configForm()
    this.configTipoSpinner()
  }

  configForm() {
    this.formCadastrar = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmar: ['', Validators.required]
    })
  }

  private configTipoSpinner(){
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    
    this.listaTipoSpinner = [
      'pacman',
      'square-jelly-box',
      'timer',
      'pacman',
      'line-scale-pulse-out-rapid',
      'fire',
      'cube-transition',
      'triangle-skew-spin',
      'ball-spin',
      'ball-8bits',
      'ball-zig-zag-deflect'
    ];
    
    this.nomeTipoSpinner = this.listaTipoSpinner[randomNumber];
  }

  cadastrar(){
    if(this.validaFormulario()){

      let profile: Profile = this.criarProfile()
      this.spinner.show()

      this.authTokenService.obterToken(this.authEnv.username, this.authEnv.password)
        .subscribe(res => {
          if(res){
            this.authTokenService.cadastrarUsuario(profile).subscribe(res => {
              if(res && res != 409){
                this.formCadastrar.reset();
                this.authTokenService.logoutClient().subscribe(res => {})
                this.sessionService.clearSession()

                this.spinner.hide()
                this.showToasty('success', 'Cadastro realizado com sucesso!')
                setTimeout(() => {
                  this.showToasty('success', 'Por favor, confirme o cadastro por e-mail!')
                }, 1000);
              }else if(res == 409){
                this.spinner.hide()
                this.showToasty('error', 'Usuario já cadastrado!')
              }else{
                this.spinner.hide()
                this.showToasty('error', 'Erro ao realizar o cadastro!')
              }
            })
          }else{
            this.spinner.hide()
            this.showToasty('error', 'Erro ao realizar o cadastro!')
          }
        })
    }
  }

  criarProfile(): Profile {
    return {
      firstName: this.formCadastrar.controls['nome'].value,
      lastName: this.formCadastrar.controls['sobrenome'].value,
      username: this.formCadastrar.controls['email'].value,
      email: this.formCadastrar.controls['email'].value,
      enabled: true,
      credentials: [{
        type: 'password',
        value: this.formCadastrar.controls['senha'].value,
        temporary: false
      }]
    }
  }

  validaFormulario(): boolean {

    var email = this.formCadastrar.controls['email'].value;
    var senha = this.formCadastrar.controls['senha'].value;
    var confirmar = this.formCadastrar.controls['confirmar'].value;

    if (!this.formCadastrar.valid) {
      this.showToasty('warning', 'Por favor, preencha todos os campos corretamente!')
      return false;
    }

    if(!email.match(this.regexEmail)){
      this.showToasty('error', 'E-mail preenchido não é válido!')
      return false;
    }

    if(senha != confirmar){
      this.showToasty('error', 'Senha e confirmação da senha não estão iguais!')
      return false;
    }

    return true;
  }

  public showToasty(type:string, message:string): void {
    this.notifier.notify(type, message)
  }
}
