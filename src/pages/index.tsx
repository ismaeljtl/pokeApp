import { useState, useEffect } from "react";
import { localStorageHelper } from "@/helpers/localStorageHelper";
import { usePokemonAction } from "@/state/pokemon/pokemonAction";
import { usePokemonState } from "@/state/pokemon/usePokemonState";
import Card from "@/components/card/Card";
import Loader from "@/components/loader/Loader";
import Head from "next/head";
import ReactPaginate from "react-paginate";
import { usePagination } from "@/hooks/usePagination";
import { usePokemonLocalStorage } from "@/hooks/usePokemonLocalStorage";

export default function Home() {
  const { data, loading, error } = usePokemonState();
  const { getAllPokemons } = usePokemonAction();
  const {
    handlePageClick,
    filterPagination,
    pageCount,
    itemOffset,
    itemsPerPage,
    currentItems,
  } = usePagination(data.pokemonList);

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (loading) return <Loader />;
  if (error) return <h1>There has been an error. Try to refresh the page.</h1>;
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row align-items-baseline">
        <h2 className="mt-4 col">Pokemon characters</h2>
        <input
          type="text"
          placeholder="Search for a Pokemon"
          className="h-fit-content form-control w-auto"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            filterPagination(e.currentTarget.value)
          }
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3 my-2">
        {currentItems.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            isFavourite={pokemon.isFavourite}
          />
        ))}
      </div>
      <ReactPaginate
        className="pagination mt-4 justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeLinkClassName="active"
        breakClassName="page-link"
        disabledClassName="disabled"
        previousLabel="Previous"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(pageCount!)}
        previousClassName="page-link"
        nextClassName="page-link"
        forcePage={Math.ceil((itemOffset + itemsPerPage) / itemsPerPage) - 1}
      />
    </>
  );
}
