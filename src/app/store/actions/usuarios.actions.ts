import { createAction, props } from '@ngrx/store';
import { Usuario } from "../../models/usuario.model";

enum USUARIOS_ACTIONS {
  USUARIOS_CARGAR         = '[Usuarios] Cargar Usuarios',
  USUARIOS_CARGAR_SUCCESS = '[Usuarios] Cargar Usuarios Success',
  USUARIOS_CARGAR_ERROR   = '[Usuarios] Cargar Usuarios Error',
}

export const cargarUsuarios =
  createAction<USUARIOS_ACTIONS.USUARIOS_CARGAR>(
    USUARIOS_ACTIONS.USUARIOS_CARGAR
  );

export const cargarUsuariosSuccess =
  createAction<USUARIOS_ACTIONS.USUARIOS_CARGAR_SUCCESS, { usuarios: Usuario[] }>(
    USUARIOS_ACTIONS.USUARIOS_CARGAR_SUCCESS,
    props<{ usuarios: Usuario[] }>()
  );

export const cargarUsuariosError =
  createAction<USUARIOS_ACTIONS.USUARIOS_CARGAR_ERROR, { payload: any }>(
    USUARIOS_ACTIONS.USUARIOS_CARGAR_ERROR,
    props<{ payload: any }>()
  );
