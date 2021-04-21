import axios from "axios";

export const traerTodos = () => async (dispath) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispath({
        type: "traer_usuarios",
        payload: response.data
    })
}