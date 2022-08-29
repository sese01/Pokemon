import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createLogin() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
       
        
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    
    
  }
  constructor() {
    this.login = this.createLogin();
    
  }
  ngOnInit(): void {}

  onValidatorLogin(): void{
    if (this.login.valid) {
      console.info('esta bien');
    } else {
      console.info('esta mal');
    }
  }
}
