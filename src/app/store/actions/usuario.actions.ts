import { createAction, props } from '@ngrx/store';
import { Usuario } from "../../models/usuario.model";

enum USUARIO_ACTIONS {
  USUARIO_CARGAR         = '[Usuario] Cargar Usuario',
  USUARIO_CARGAR_SUCCESS = '[Usuario] Cargar Usuario Success',
  USUARIO_CARGAR_ERROR   = '[Usuario] Cargar Usuario Error',
}

export const cargarUsuario =
  createAction<USUARIO_ACTIONS.USUARIO_CARGAR, { id: string }>(
    USUARIO_ACTIONS.USUARIO_CARGAR,
    props<{ id: string }>()
  );

export const cargarUsuarioSuccess =
  createAction<USUARIO_ACTIONS.USUARIO_CARGAR_SUCCESS, { usuario: Usuario }>(
    USUARIO_ACTIONS.USUARIO_CARGAR_SUCCESS,
    props<{ usuario: Usuario }>()
  );

export const cargarUsuarioError =
  createAction<USUARIO_ACTIONS.USUARIO_CARGAR_ERROR, { payload: any }>(
    USUARIO_ACTIONS.USUARIO_CARGAR_ERROR,
    props<{ payload: any }>()
  );
