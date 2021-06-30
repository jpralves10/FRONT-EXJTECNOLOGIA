import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from '../../services/auth-token/auth-token.service';
import { SessionManagerService } from '../../services/session-manager/session-manager.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authTokenService: AuthTokenService,
    private sessionService: SessionManagerService,
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.sessionService.clearSession()
    this.authTokenService.logoutClient().subscribe(isOK => {});
    this.router.navigate([''])
  }
}
