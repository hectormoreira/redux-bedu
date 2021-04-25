import { TRAER_TODAS, LOADING, ERROR } from "../types/tareasTypes";

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: "",
};

const tareasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        tareas: action.payload,
        loading: false,
        error: '',
        usuario_id: '',
        titulo: ''
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };
    
    case 'cambio_usuario_id':
        return {
          ...state,
          usuario_id: action.payload
        };
    
    case 'cambio_titulo':
        return {
          ...state,
          titulo: action.payload
        };
    
    default:
      return state;
  }
};

export default tareasReducer;