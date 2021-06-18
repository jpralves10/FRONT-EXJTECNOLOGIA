import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../shared/services/auth/auth-token.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private authTokenService: AuthTokenService
  ) { }

  ngOnInit(): void {
    this.authTokenService.clearUrl();
    this.authTokenService.createTokenTimeout();
  }

}
