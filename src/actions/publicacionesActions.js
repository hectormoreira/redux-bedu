import axios from "axios";
import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesTypes";
import * as usuariosTypes from "../types/usuariosTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });

  let { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;

  try {
    const response = await axios.get(
      `http://localhost:3000/posts?userId=${usuario_id}`
    );

    const nuevas =  response.data.map((publicacion) =>({
      ...publicacion,
      comentarios:[],
      open: false

    }))

    const publicaciones_actualizadas = [
      ...publicaciones,
      response.data
    ];

    dispatch({
      type: TRAER_POR_USUARIO,
      payload: publicaciones_actualizadas,
    });

    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];

    usuarios_actualizados[key] = {
      ...usuarios[key],
      publicaciones_key,
    };

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados,
    });

  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "Publicaciones no disponibles",
    });
  }
};

export const abrirCerrar = (pub_key, com_key) => (dispatch) => {
 console.log(pub_key, com_key);
}