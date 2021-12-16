import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementar, disminuir } from "./redux/actions/ContadorActions";

class ClassComponent2 extends React.Component {
  static mapStateToProps = (state) => {
    return {
      count: state.count,
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        incrementar,
        disminuir,
      },
      dispatch
    );
  };

  render() {
    const { incrementar, disminuir } = this.props;

    return (
      <div>
        <div> Contador: {this.props.count}</div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
    );
  }
}

export default connect(
  ClassComponent2.mapStateToProps,
  ClassComponent2.mapDispatchToProps
)(ClassComponent2);
