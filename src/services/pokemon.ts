import { IPokemon } from "@/state/pokemon/pokemon.types";

export const getPokemon = async (id: number): Promise<IPokemon> => {
  return await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`).then()
  ).json();
};
