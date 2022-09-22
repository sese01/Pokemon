import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class pokemonsService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPokemons(index: number) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  getAllPokemons() {
    return this.http.get<any>(this.baseUrl+'/pokemon');
  }
}
