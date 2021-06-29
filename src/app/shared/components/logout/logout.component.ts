import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from '../../services/auth-token/auth-token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authTokenService: AuthTokenService
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.authTokenService.logoutClient().subscribe(isOK => {});
    this.router.navigate([''])
  }
}
