import ActionTypes from "../actions/ActionTypes";

const estadoInicial = {
  count: 0,
};

export default function ContadorReducer(state = estadoInicial, action) {
  switch (action.type) {
    case ActionTypes.INCREMENTAR:
      // return estadoInicial + 1;
      return {
        count: state.count + 1,
      };
    case ActionTypes.DISMINUIR:
      // return estadoInicial - 1;
      return {
        count: state.count - 1,
      };
    default:
      return;
  }
}
