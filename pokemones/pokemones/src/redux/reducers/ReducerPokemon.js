import * as types from "../actions/ActionTypes";

const statePokemon = {
  Pokemones: 30,
};

const gameShop = (state = statePokemon, action) => {
  switch (action.type) {
    case types.COMPRAR_POKEMON: {
      return {
        ...state,
        Pokemones: state.Pokemones - action.pokemon,
      };
    }
    case types.REGRESAR_POKEMON: {
      return {
        ...state,
        Pokemones: state.Pokemones + action.pokemon,
      };
    }
    default:
      return state;
  }
};

export default gameShop;
