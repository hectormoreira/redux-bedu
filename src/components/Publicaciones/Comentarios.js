import React from "react";
import {connect} from 'react-redux';
import FatalError from "../general/FatalError";
import Spinner from "../general/Spinner";

const Comentarios = (props) => {
    if (props.com_error) {
        return <FatalError message={props.com_error}/>
    }

    if (props.com_loading && !props.comentarios.length) {
        return <Spinner/>
    }
    
  const ponerComentarios = () =>
    props.comentarios.map((comentario) => (
      <li>
        <b>
          <u>{comentario.email}</u>
        </b><br/>
        {comentario.body}
      </li>
    ));

  return <ul>{ponerComentarios()}</ul>;
};

const mapStateToProps = ({publicacionesReducer}) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);
