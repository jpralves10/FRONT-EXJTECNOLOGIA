import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthTokenService } from './shared/services/auth/auth-token.service';
import { EnvironmentService } from './shared/services/env/environment.service';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { SessionManagerService } from './shared/services/session-manager/session-manager.service';
import { SharedModule } from './shared/shared.module';
import { NotifierModule } from 'angular-notifier';
import { CadastroComponent } from './principal/cadastro/cadastro.component';

export function initializeApp(envService: EnvironmentService){
  return () => envService.loadEnvironment().toPromise();
}

export function getDatepickerConfig(): NgbDatepickerConfig {
  return Object.assign(new NgbDatepickerConfig(), {
    maxDate: { year: 2999, month: 12, day: 31 }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 5
        },
        vertical: {
          position: 'top',
          distance: 3
        }
      },
      behaviour: {
        autoHide: 6000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: false,
        stacking: 5
      }
    })
  ],
  providers: [
    SessionManagerService,
    AuthTokenService,
    AuthGuardService,
    EnvironmentService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EnvironmentService],
      multi: true
    },
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },*/
    {
      provide: NgbDatepickerConfig,
      useFactory: getDatepickerConfig
    },
    {
      provide: 'Window',
      useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
