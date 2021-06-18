import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-lateral',
  templateUrl: './toolbar-lateral.component.html',
  styleUrls: ['./toolbar-lateral.component.css']
})
export class ToolbarLateralComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  redirectToAtendimento(){
    this.router.navigate(['./atendimento'])
  }
}
