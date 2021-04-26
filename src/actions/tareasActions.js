import axios from "axios";
import { LOADING, TRAER_TODAS, ERROR, CAMBIO_USUARIO_ID, CAMBIO_TITULO, AGREGADA  } from "../types/tareasTypes";
import { APIURL } from "./apiUrl";

export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(`${APIURL}/todos`);

    const tareas = {};
    response.data.map(
      (tar) =>
        (tareas[tar.userId] = {
          ...tareas[tar.userId],
          [tar.id]: {
            ...tar,
          },
        })
    );

    dispatch({
      type: TRAER_TODAS,
      payload: tareas,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Información de tareas no disponible",
    });
  }
};

export const cambioUsuarioId = (usuario_id) => (dispatch) => {
  dispatch({
    type: CAMBIO_USUARIO_ID,
    payload: usuario_id,
  });
};

export const cambioTitulo = (titulo) => (dispatch) => {
  dispatch({
    type: CAMBIO_TITULO,
    payload: titulo,
  });
};

export const agregar = (nueva_tarea) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.post(`${APIURL}/todos`, nueva_tarea);
    console.log(response.data);
    dispatch({
      type: AGREGADA,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Intente más tarde",
    });
  }
};

export const editar = (tarea_editada) => (dispatch) => {
  console.log(tarea_editada);
}