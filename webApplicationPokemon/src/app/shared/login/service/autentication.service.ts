import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../model/response';
import { User } from '../model/registro';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  private app: string = environment.urlApp;
  private api: string = environment.urlApiAutentication;
  private login: string = environment.urlLogin;
  private registro: string = environment.urlCreate;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.app + this.api);
  }


  // loginByEmail(form:Login) {
  //   return this.http.post(this.app + this.api+ this.login, form,{
  //     responseType: 'text',
  //   });

  // }
  loginByEmail(form:Login) {
     return this.http.post(this.app + this.api+ this.login, form,{
      responseType: "text",
     });
  }
  createUser(form:User) {
    return this.http.post(this.app + this.api+ this.registro, form,{
      responseType: 'text',
    });

  }
  

  
}
