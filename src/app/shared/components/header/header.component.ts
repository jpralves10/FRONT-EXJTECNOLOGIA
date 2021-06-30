import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile.model';
import { SessionManagerService } from '../../services/session-manager/session-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: Profile = {}
  usuarioLogado: boolean = false

  constructor(
    private sessionService: SessionManagerService,
  ) { }

  ngOnInit(): void {
    this.sessionService.profile.subscribe(profile => { 
      this.profile = profile ? profile as Profile : this.sessionService.getProfile()
    });
    this.sessionService.token.subscribe(token => {
      this.usuarioLogado = token ? true : this.sessionService.getTokenLogin() ? true : false
    });
  }
}
