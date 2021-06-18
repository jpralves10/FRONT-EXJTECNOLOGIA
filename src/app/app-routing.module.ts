import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule),
    //loadChildren: './principal/principal.module#PrincipalModule',
    //canActivate: [AuthGuardService],
    data: {
      breadcrumb: {visible:false}
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
