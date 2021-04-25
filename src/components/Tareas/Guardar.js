import React, { Component } from "react";
import { connect } from "react-redux";
import * as tareasActions from "../../actions/tareasActions";

class Guardar extends Component {
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value);
  };

  cambioTitulo = (event) => {
    this.props.cambioTitulo(event.target.value);
  };

  guardar = () => {
      
  }

  render() {
    return (
      <div>
        <h1>Guardar tarea</h1>
        Usuario id:
        <input
          type="number"
          value={this.props.usuario_id}
          onChange={this.cambioUsuarioId}
        />
        <br />
        <br />
        Título:
        <input type="text" value={this.titulo} />
        <br />
        <br />
        <button onClick={this.guardar}>Guardar</button>
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);
