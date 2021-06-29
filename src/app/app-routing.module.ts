import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './shared/components/header/cadastrar/cadastrar.component';
import { LoginComponent } from './shared/components/header/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { AuthGuardLoginService } from './shared/services/guards/auth-guard-login.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule),
    //canActivate: [AuthGuardService],
    data: {
      breadcrumb: {visible:false},
      roles: []
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLoginService],
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
