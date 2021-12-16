var redux = require("redux");
var createStore = redux.createStore;

var reducer = function () {
  return "state";
};

var store = createStore(reducer);

console.log(store.getState());
