import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly notifier: NotifierService;

  public modoRecuperar: boolean = false;

  constructor(
    protected notifierService: NotifierService
  ) {
    this.notifier = notifierService
  }

  ngOnInit(): void {}

  public login(){

  }

  recuperarSenha(){

    setTimeout(() => { this.modoRecuperar = false }, 3000);
    this.showToasty('success', 'Recuperação de e-mail enviada com sucesso!')
  }

  public showToasty(type:string, message:string): void {
    this.notifier.notify(type, message)
  }

  esqueceuSenha(){
    this.modoRecuperar = true
  }
}
