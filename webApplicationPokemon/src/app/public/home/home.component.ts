import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Inicio: boolean = false;
  public Registrarse: boolean = false;
  public showLogin: Number = 0;

  constructor() {}

  ngOnInit(): void {}

  public login(): void {
    this.showLogin = 1;
  }
  public register(): void {
    this.showLogin = 2;
  }
  public return(): void {
    this.showLogin = 0;
  }
}
