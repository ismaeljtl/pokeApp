import { useContext, useMemo } from "react";
import { PokemonContext } from "./pokemonContextProvider";

export const usePokemonState = () => {
  const { state } = useContext(PokemonContext);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
