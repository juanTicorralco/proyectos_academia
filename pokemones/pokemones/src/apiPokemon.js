import http from "./conexionJson";

class PokemonApi {
  getAll() {
    return http.get("/statePokemon");
  }
  upDate(pokemon) {
    return http.put(`/statePokemon?${id}`);
  }
}
export default PokemonApi;
