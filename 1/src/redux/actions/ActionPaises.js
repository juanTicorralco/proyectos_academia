import * as ActionTypes from "./ActionTypes";
import PaisesService from "../../api/PaisesApi";

export const listarPaises = () => async (dispatch) => {
  try {
    const response = await PaisesService.getAll();
    dispatch({
      type: ActionTypes.RETRIEVE_PAISES,
      pais: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const listarUsuarios = () => async (dispatch) => {
  try {
    const response = await PaisesService.getAllUsuario();

    if (response.data === []) {
      dispatch({
        type: ActionTypes.CHECK_USUARIO,
        usuario: "error",
      });
    } else {
      dispatch({
        type: ActionTypes.CHECK_USUARIO,
        usuario: response.data,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const UnUsuarios = (email) => async (dispatch) => {
  try {
    const response = await PaisesService.getUsuario(email);

    if (response.data === []) {
      dispatch({
        type: ActionTypes.CHECK_USUARIO_UNO,
        usuario: "error",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const crearUsuario = (usuario) => async (dispatch) => {
  try {
    const response = await PaisesService.createUsuario(usuario);

    dispatch({
      type: ActionTypes.CREATE_USUARIO,
      usuario: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const crearPais = (pais) => async (dispatch) => {
  try {
    const response = await PaisesService.create(pais);

    dispatch({
      type: ActionTypes.CREATE_PAISES,
      pais: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const editarPais = (id, pais) => async (dispatch) => {
  try {
    await PaisesService.update(id, pais);

    dispatch({
      type: ActionTypes.UPDATE_PAISES,
      pais: pais,
    });
  } catch (e) {
    console.log(e);
  }
};

export const eliminarPais = (id) => async (dispatch) => {
  try {
    await PaisesService.delete(id);
    dispatch({
      type: ActionTypes.DELETE_PAISES,
      pais: id,
    });
  } catch (e) {
    console.log(e);
  }
};
