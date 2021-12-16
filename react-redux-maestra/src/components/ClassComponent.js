import React from "react";
import { store, incrementar, disminuir } from "../store";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    contador: 0,
  };

  incrementar(cantidad) {
    store.dispatch(incrementar(cantidad));
    this.setState(() => {
      return {
        contador: store.getState().count,
      };
    });
  }

  disminuir(cantidad) {
    store.dispatch(disminuir(cantidad));
    this.setState(() => {
      return {
        contador: store.getState().count,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador} </h1>
        <button
          onClick={() => {
            this.incrementar(this.props.cantidadAINcrementar);
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => {
            this.disminuir(this.props.cantidadADisminuir);
          }}
        >
          Disminuir
        </button>
      </div>
    );
  }
}

export default ClassComponent;
