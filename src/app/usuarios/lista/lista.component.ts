import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from "../../models/usuario.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {cargarUsuarios} from "../../store/actions";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarioList: Usuario[] = []
  loading: boolean = false
  error: any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      console.log(users)
      console.log('usuarios')
      this.usuarioList = users
      this.loading     = loading
      this.error       = error
    } )

    this.store.dispatch( cargarUsuarios() )
   /*   this.usuarioService.getUsers().subscribe( users => {
        this.usuarioList = users
      } )*/
  }

}
