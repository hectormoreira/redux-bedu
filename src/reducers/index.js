import { combineReducers } from 'redux';
import publicacionesReducer from './publicacionesReducer';
import tareasReducer from './tareasReducer';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
	usuariosReducer,
	publicacionesReducer,
	tareasReducer
});