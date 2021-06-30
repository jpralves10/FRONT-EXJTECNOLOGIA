import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthTokenService } from 'src/app/shared/services/auth-token/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly notifier: NotifierService;
  formLogin: FormGroup;
  modoRecuperar: boolean = false;
  listaTipoSpinner: string[];
  nomeTipoSpinner: string;

  readonly regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(
    protected notifierService: NotifierService,
    protected authTokenService: AuthTokenService,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.notifier = notifierService
  }

  ngOnInit(): void {
    this.configForm()
    this.configTipoSpinner()
  }

  configForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
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

  public login(){
    if (!this.formLogin.valid) {
      this.showToasty('warning', 'Por favor, preencha todos os campos corretamente!')
    }else{
      var email = this.formLogin.controls['email'].value;
      var senha = this.formLogin.controls['senha'].value;

      if(!email.match(this.regexEmail)){
        this.showToasty('error', 'E-mail preenchido não é válido!')
      }else{
        this.spinner.show();
        this.authTokenService.obterToken(email, senha).subscribe(ret => {
          if(ret){
            setTimeout(() => {
              this.spinner.hide();
              this.router.navigate(['']) 
            }, 2000);
            this.showToasty('success', 'Login realizado com sucesso!')
          }else{
            this.spinner.hide();
            this.showToasty('warning', 'Usuário não encontrado, por favor cadastre-se')
          }
        })
      }
    }
  }

  recuperarSenha(){

    setTimeout(() => { this.modoRecuperar = false }, 3000);
    this.showToasty('success', 'Recuperação de senha enviado para o e-mail!')
  }

  public showToasty(type:string, message:string): void {
    this.notifier.notify(type, message)
  }

  esqueceuSenha(){
    this.modoRecuperar = true
  }
}
