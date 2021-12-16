var redux = require("redux");
var createStore = redux.createStore;

// const incrementar = function () {
//   return { type: "INCREMENTAR" };
// };

// const disminuir = function () {
//   return { type: "DISMINUIR" };
// };

const incrementar = () => {
  return { type: "INCREMENTAR" };
};

const disminuir = () => {
  return { type: "DISMINUIR" };
};

var reducer = (estadoInicial = 0, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return estadoInicial + 1;
    case "DISMINUIR":
      return estadoInicial - 1;
  }
};

var store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementar());
store.dispatch(incrementar());
store.dispatch(incrementar());
store.dispatch(disminuir());

// console.log(store.getState());
