import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  private readonly notifier: NotifierService;

  public formCadastrar: FormGroup;

  constructor(
    protected notifierService: NotifierService,
    private formBuilder: FormBuilder
  ) {
    this.notifier = notifierService
  }

  ngOnInit(): void {
    this.configForm()
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

  cadastrar(){
    if (!this.formCadastrar.valid) {
      this.showToasty('warning', 'Por favor, preencha todos os campos corretamente!')
    }else{
      if(this.formCadastrar.controls['senha'].value != 
        this.formCadastrar.controls['confirmar'].value){
          this.showToasty('error', 'Senha e confirmação da senha não estão iguais!')
      }else{
        this.formCadastrar.reset();
        this.showToasty('success', 'Cadastro realizado com sucesso!')
        setTimeout(() => {
          this.showToasty('success', 'Por favor, confirme o cadastro por e-mail!')
        }, 1000);
      }     
    }
  }

  public showToasty(type:string, message:string): void {
    this.notifier.notify(type, message)
  }
}
