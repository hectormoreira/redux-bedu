import axios from "axios";
import { LOADING, TRAER_TODOS, ERROR } from "../types/usuariosTypes";

export const traerTodos = () => async (dispath) => {
    dispath({
        type: LOADING
    });

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispath({
            type: TRAER_TODOS,
            payload: response.data
        })
    } catch (error) {
        dispath({
            type: ERROR,
            payload: 'Ocurrió un error, intente más tarde'
        })
    }
}