import { useContext } from "react";
import { PokemonContext } from "./pokemonContextProvider";
import { IPokemon, PokemonActionEnum } from "./pokemon.types";
import { getPokemon } from "@/services/pokemon";
import { localStorageHelper } from "@/helpers/localStorageHelper";
import { usePokemonState } from "./usePokemonState";
import { usePokemonLocalStorage } from "@/hooks/usePokemonLocalStorage";

const POKEMON_COUNT = 151;

export const usePokemonAction = () => {
  const { dispatch } = useContext(PokemonContext);
  const { data } = usePokemonState();
  const { toggleFavourite: toggleFavouriteOnLocalStorage } =
    usePokemonLocalStorage();

  const getAllPokemons = async () => {
    dispatch({ type: PokemonActionEnum.GET_ALL_POKEMONS_BEGIN });
    const localStoragePokemons: {
      datatype: string;
      value: Map<number, boolean>;
    } = localStorageHelper.getItem("pokemonList");
    const pokemonMap = localStoragePokemons
      ? new Map(localStoragePokemons.value)
      : undefined;

    if (data.pokemonList.length) {
      const pokemonListWithFavourites = data.pokemonList.map((pokemon) => {
        return {
          ...pokemon,
          isFavourite: pokemonMap!.get(pokemon.id),
        };
      });
      dispatch({
        type: PokemonActionEnum.GET_ALL_POKEMONS_SUCCESS,
        payload: pokemonListWithFavourites,
      });
    } else {
      try {
        let fetchArr = [];
        for (let i = 1; i <= POKEMON_COUNT; i++) {
          fetchArr.push(getPokemon(i));
        }
        const pokemonList: IPokemon[] = await Promise.all(fetchArr);
        if (pokemonMap) {
          const pokemonListWithFavourites = pokemonList.map((pokemon) => {
            return {
              ...pokemon,
              isFavourite: pokemonMap.get(pokemon.id),
            };
          });
          dispatch({
            type: PokemonActionEnum.GET_ALL_POKEMONS_SUCCESS,
            payload: pokemonListWithFavourites,
          });
        } else {
          const unfavouritePokemonList = new Map();
          pokemonList.forEach((pokemon) => {
            pokemon.isFavourite = false;
            unfavouritePokemonList.set(pokemon.id, false);
          });

          if (
            !localStorageHelper.getItem("pokemonList") &&
            unfavouritePokemonList.size
          )
            localStorageHelper.setItem(
              "pokemonList",
              JSON.stringify(
                unfavouritePokemonList,
                localStorageHelper.replacer
              )
            );

          dispatch({
            type: PokemonActionEnum.GET_ALL_POKEMONS_SUCCESS,
            payload: pokemonList,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: PokemonActionEnum.GET_ALL_POKEMONS_FAILURE });
      }
    }
  };

  const getPokemonById = async (id: number) => {
    const localStoragePokemons: {
      datatype: string;
      value: Map<number, boolean>;
    } = localStorageHelper.getItem("pokemonList");
    const pokemonMap = localStoragePokemons
      ? new Map(localStoragePokemons.value)
      : undefined;

    if (!id) return;
    dispatch({ type: PokemonActionEnum.GET_POKEMON_BEGIN });

    if (data.pokemonList.length) {
      const pokemon = data.pokemonList.filter(
        (pokemon) => pokemon.id === id
      )[0];

      dispatch({
        type: PokemonActionEnum.GET_POKEMON_SUCCESS,
        payload: { ...pokemon, isFavourite: pokemonMap!.get(pokemon.id) },
      });
    } else {
      try {
        const pokemon: IPokemon = await getPokemon(id);

        if (pokemonMap) {
          dispatch({
            type: PokemonActionEnum.GET_POKEMON_SUCCESS,
            payload: { ...pokemon, isFavourite: pokemonMap!.get(pokemon.id) },
          });
        } else {
          dispatch({
            type: PokemonActionEnum.GET_POKEMON_SUCCESS,
            payload: pokemon,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({ type: PokemonActionEnum.GET_POKEMON_FAILURE });
      }
    }
  };

  const toggleFavourite = (id: number) => {
    dispatch({
      type: PokemonActionEnum.TOGGLE_FAVOURITE,
      payload: id,
    });
    toggleFavouriteOnLocalStorage(id);
  };
  return { getAllPokemons, getPokemonById, toggleFavourite };
};
