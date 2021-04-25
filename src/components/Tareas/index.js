import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as tareasActions from "../../actions/tareasActions";
import FatalError from "../general/FatalError";
import Spinner from "../general/Spinner";

class Tareas extends Component {
  componentDidMount() {
    this.props.traerTodas();
  }

  mostrarContenido = () => {
    const { tareas, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <FatalError message={error} />;
    }

    return Object.keys(tareas).map((usu_id) => (
      <div key={usu_id}>
        <h2>Usuario {usu_id}</h2>
        <div className="contenedor_tareas">{this.ponerTareas(usu_id)}</div>
      </div>
    ));
  };

  ponerTareas = (usu_id) => {
    const { tareas } = this.props;
    const por_usuario = {
      ...tareas[usu_id],
    };
    return Object.keys(por_usuario).map((tar_id) => (
      <div key={tar_id}>
        <input type="checkbox" defaultChecked={por_usuario[tar_id].completed} />
        {por_usuario[tar_id].title}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button>
          <Link to="/tareas/guardar">Agregar</Link>
        </button>
        {this.mostrarContenido()}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;
export default connect(mapStateToProps, tareasActions)(Tareas);
