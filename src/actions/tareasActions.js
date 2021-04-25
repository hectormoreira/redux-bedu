import axios from "axios";
import { LOADING, TRAER_TODAS, ERROR } from "../types/tareasTypes";
import { APIURL } from "./apiUrl";

export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      `${APIURL}/todos`
    );

    const tareas ={}
    response.data.map((tar)=>(
        tareas[tar.userId] = {
            ...tareas[tar.userId],
            [tar.id]: {
                ...tar
            }
        }
    ));

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
    type: "cambio_usuario_id",
    payload: usuario_id
  })
}

export const cambioTitulo = (titulo) => (dispatch) => {
  dispatch({
    type: "cambio_titulo",
    payload: titulo
  })
}