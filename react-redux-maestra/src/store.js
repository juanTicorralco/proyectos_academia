var redux = require("redux");
var createStore = redux.createStore;

const estadoInicial = {
  count: 0,
};

export const incrementar = (cantidad) => {
  return { type: "INCREMENTAR", cantidad: cantidad };
};

export const disminuir = (cantidad) => {
  return { type: "DISMINUIR", cantidad: cantidad };
};

export const reducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      // return estadoInicial + 1;
      return {
        ...state,
        count: state.count + action.cantidad,
      };
    case "DISMINUIR":
      // return estadoInicial - 1;
      return {
        ...state,
        count: state.count - action.cantidad,
      };
  }
};

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// store.dispatch(incrementar());
// store.dispatch(incrementar());
// store.dispatch(incrementar());
// store.dispatch(disminuir());
