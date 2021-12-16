import * as type from "./ActionTypes";

export const comprarPokemon = (pokemon) => {
  return {
    type: type.COMPRAR_POKEMON,
    pokemon: pokemon,
  };
};

export const regresarPokemon = (pokemon) => {
  return {
    type: type.REGRESAR_POKEMON,
    pokemon: pokemon,
  };
};
