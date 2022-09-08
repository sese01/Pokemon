import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public active: boolean = false;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createLogin() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
       
        
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    
    
  }
  constructor(private router: Router) {
    this.login = this.createLogin();
    
    
    
  }
  ngOnInit(): void {
  }

  onValidatorLogin(): void{
    if (this.login.valid) {
      
      this.router.navigateByUrl('/profile');
      this.active = true;
    } else if(this.login.invalid){
      this.active = false;
      alert('Los datos suministrados son invalidos por favor verifica');
    }
  }
}
