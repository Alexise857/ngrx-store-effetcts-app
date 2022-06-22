import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";
import { of } from "rxjs";

@Injectable()
export class UsuariosEffects {
  constructor(
    // estos actions son observables que estan pediente de todas las acciones que se disparan
    private actions$: Actions,
    // Osea actions$: es un observable que esta escuchando las acciones
    private usuarioService: UsuarioService
  ) {
  }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      // Ojo no lo estoy llamando, solo que lo evalue
      ofType( usuariosActions.cargarUsuarios ),
      // tap( console.log ),
      // uso el mergmap para unir el la informacion del obsevable del servicio a la solicitud anterior
      mergeMap(
        () => this.usuarioService.getUsers().pipe(
          // tap(console.log)
          map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ),
          catchError( err => of(usuariosActions.cargarUsuariosError({payload: err })) )
        )
      )
    )
  )
}
/* Nota:

si el callback del createEffect quedara:
--------------------------------------------
  cargarUsuarios$ = createEffect(
    () => this.actions$
  )
--------------------------------------------
esa accion se dispararia en todas las acciones que exitan / pasen por el store. Tengo que hacer que este pendiente de una accion en particular

*/
