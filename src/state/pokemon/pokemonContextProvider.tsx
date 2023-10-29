import { createContext, useReducer } from "react";
import { pokemonReducer } from "./pokemonReducer";
import { IPokemonContext, IPokemonState, IPokemon } from "./pokemon.types";

export const PokemonContext = createContext({} as IPokemonContext);

export const PokemonContextProvider: React.FC<any> = ({ children }) => {
  const initialState: IPokemonState = {
    data: { pokemonList: [] as IPokemon[], selectedPokemon: {} as IPokemon },
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const value: IPokemonContext = { state, dispatch };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
