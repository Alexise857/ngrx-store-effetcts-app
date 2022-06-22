import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Usuario } from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private  http: HttpClient ) { }

  getUsers(): Observable<Usuario[]>{
   return this.http.get(`${ this.url }/users?per_page=6`).pipe(
     map( (respuesta: any) => respuesta['data'] )
   )
  }

  getUserById( id: string ): Observable<Usuario>{
   return this.http.get(`${ this.url }/users/${ id }`).pipe(
     map( (respuesta: any) => respuesta['data'] )
   )
  }

}
