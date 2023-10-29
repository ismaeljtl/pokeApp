import { IPokemonState, PokemonActionEnum } from "./pokemon.types";

export const pokemonReducer = (state: IPokemonState, action: any) => {
  switch (action.type) {
    case PokemonActionEnum.GET_ALL_POKEMONS_BEGIN:
    case PokemonActionEnum.GET_POKEMON_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case PokemonActionEnum.GET_ALL_POKEMONS_FAILURE:
    case PokemonActionEnum.GET_POKEMON_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case PokemonActionEnum.GET_ALL_POKEMONS_SUCCESS: {
      const all_pokemons = action.payload;
      return {
        ...state,
        loading: false,
        data: { ...state.data, pokemonList: all_pokemons },
      };
    }
    case PokemonActionEnum.GET_POKEMON_SUCCESS: {
      const pokemon = action.payload;
      return {
        ...state,
        loading: false,
        data: { ...state.data, selectedPokemon: pokemon },
      };
    }
    case PokemonActionEnum.TOGGLE_FAVOURITE: {
      const id = action.payload;
      const updatedSelectedPokemon = {
        ...state.data.selectedPokemon,
        isFavourite: !state.data.selectedPokemon.isFavourite,
      };
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          selectedPokemon:
            state.data.selectedPokemon.id === id
              ? updatedSelectedPokemon
              : state.data.selectedPokemon,
          pokemonList: state.data.pokemonList.map((pokemon) =>
            pokemon.id === id
              ? { ...pokemon, isFavourite: !pokemon.isFavourite }
              : pokemon
          ),
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
