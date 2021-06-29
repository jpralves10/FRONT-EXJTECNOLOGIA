import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../shared/services/auth-token/auth-token.service';
import { SessionManagerService } from '../shared/services/session-manager/session-manager.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private authTokenService: AuthTokenService,
    private session: SessionManagerService
  ) { }

  ngOnInit(): void {

    if(this.session.getTokenLogin()){
      this.authTokenService.createTokenTimeout();
    }
  }
}
