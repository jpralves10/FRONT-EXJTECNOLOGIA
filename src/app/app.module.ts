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
import { AuthTokenService } from './shared/services/auth-token/auth-token.service';
import { EnvironmentService } from './shared/services/environment/environment.service';
import { SessionManagerService } from './shared/services/session-manager/session-manager.service';
import { SharedModule } from './shared/shared.module';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CadastroComponent } from './principal/cadastro/cadastro.component';
import { AuthGuardLoginService } from './shared/services/guards/auth-guard-login.service';
import { HttpRequestInterceptor } from './shared/services/http/http-interceptor/http.interceptor';

export function initializeApp(envService: EnvironmentService){
  return () => envService.loadEnvironment().toPromise();
}

export function getDatepickerConfig(): NgbDatepickerConfig {
  return Object.assign(new NgbDatepickerConfig(), {
    maxDate: { year: 2999, month: 12, day: 31 }
  })
}

/*export function initializerKeycloak(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        let initKeycloak = await keycloak.init({
          config: {
              url: 'http://localhost:8080/auth',
              realm: 'realmExj',
              clientId: 'exj-microservice'
          },
          loadUserProfileAtStartUp: true,
          enableBearerInterceptor: true,
          bearerPrefix: 'Bearer',
          bearerExcludedUrls: ['/assets'],
          initOptions: {
              onLoad: 'check-sso'
          }
        });
        resolve(initKeycloak);
      } catch (error) {
        reject(error);
      }
    })
  }
}*/

/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    SessionManagerService,
    AuthTokenService,
    AuthGuardLoginService,
    EnvironmentService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EnvironmentService],
      multi: true
    },
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializerKeycloak,
      multi: true,
      deps: [KeycloakService],
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
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
