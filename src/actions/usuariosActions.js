import axios from "axios";
import { LOADING, TRAER_TODOS, ERROR } from "../types/usuariosTypes";
import { APIURL } from "./apiUrl";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      `${APIURL}/users`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Información de usuario no disponible",
    });
  }
};
