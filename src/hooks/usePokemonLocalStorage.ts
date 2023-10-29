import { useEffect, useState } from "react";
import { localStorageHelper } from "@/helpers/localStorageHelper";

export const usePokemonLocalStorage = () => {
  const toggleFavourite = (id: number) => {
    const localStoragePokemonList: {
      datatype: string;
      value: Map<number, boolean>;
    } = localStorageHelper.getItem("pokemonList");
    const pokemonList = new Map(localStoragePokemonList.value);
    const modifiedPokemons = pokemonList.set(id, !pokemonList.get(id));
    localStorageHelper.setItem(
      "pokemonList",
      JSON.stringify(modifiedPokemons, localStorageHelper.replacer)
    );
  };

  return { toggleFavourite };
};
