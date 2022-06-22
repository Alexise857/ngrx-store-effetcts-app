import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuarioAction from "../actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";
import { of } from "rxjs";

@Injectable()
export class UsuarioEffects {
  constructor(
    // estos actions son observables que estan pediente de todas las acciones que se disparan
    private actions$: Actions,
    // Osea actions$: es un observable que esta escuchando las acciones
    private usuarioService: UsuarioService
  ) {
  }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      // Ojo no lo estoy llamando, solo que lo evalue
      ofType( usuarioAction.cargarUsuario ),
      // tap( console.log ),
      // uso el mergmap para unir el la informacion del obsevable del servicio a la solicitud anterior
      mergeMap(
        ({ id, type } ) => this.usuarioService.getUserById(id).pipe(
          // tap(console.log)
          map( user => usuarioAction.cargarUsuarioSuccess({ usuario: user }) ),
          catchError( err => of(usuarioAction.cargarUsuarioError({payload: err })) )
        )
      )
    )
  )
}
/* Nota:

si el callback del createEffect quedara:
--------------------------------------------
  cargarUsuario$ = createEffect(
    () => this.actions$
  )
--------------------------------------------
esa accion se dispararia en todas las acciones que exitan / pasen por el store. Tengo que hacer que este pendiente de una accion en particular

*/
