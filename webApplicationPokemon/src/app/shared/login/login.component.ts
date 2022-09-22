import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './model/registro';
import { Login } from './model/login';
import { AutenticationService } from './service/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public register: FormGroup;
  public active: boolean = false;
  listaUsers: User[] = [];
  @Input() Inicio: boolean = false;
  @Input() Registrarse: boolean = false;
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
  createRegister() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  constructor(
    private router: Router,
    private _loginService: AutenticationService
  ) {
    this.login = this.createLogin();
    this.register = this.createRegister();
  }
  ngOnInit(): void {
    this.GetUsers();
    this.checkLocalStorage();
  }
  GetUsers() {
    this._loginService.getUsers().subscribe((data) => {
      this.listaUsers = data;
    });
  }

  // public user(obj: any):boolean {
  //   return obj.usuario == this.

  // }
  isUserValid: boolean = false;

  // onValidatorLogin(form: Login) {
  //   this._loginService.loginByEmail(form).subscribe((res) => {
  //     console.info(res)
  //     if (res == 'paila') {
  //       this.isUserValid = false;
  //       alert('Fallido');
  //     }else{
  //       this.isUserValid = true;
        
  //       this.router.navigate(['/profile']);
  //     }
  //   });
  // }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/profile']);
    }
  }

  onValidatorLogin(form: Login) {
    this._loginService.loginByEmail(form).subscribe(res => {
      let dataResponse = res;
      if(dataResponse != 'paila'){
        localStorage.setItem("token",res);
        this.router.navigate(['/profile']);
      }

    });
  }

  onValidatorRegister(create: User) {
    console.info(create)
    this._loginService.createUser(create).subscribe((data) => {
      if(data)
      {
        alert('En hora buena te haz registrado');

      }else(
        alert('por favor completa los datos')
      )
    });
  }
}
