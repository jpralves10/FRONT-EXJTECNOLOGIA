import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public userLogged: {"name":string};

  public authModel: boolean = true

  constructor() { }

  ngOnInit(): void {}

  logout(){}

}
