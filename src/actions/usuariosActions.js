import axios from "axios";
import { LOADING, TRAER_TODOS, ERROR } from "../types/usuariosTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com//users"
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
