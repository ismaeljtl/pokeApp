import React, { useEffect } from "react";
import Link from "next/link";
import { usePokemonState } from "@/state/pokemon/usePokemonState";
import { useRouter } from "next/router";
import styles from "./details.module.scss";
import { usePokemonAction } from "@/state/pokemon/pokemonAction";
import Image from "next/image";
import Loader from "@/components/loader/Loader";
import Badge from "@/components/badge/Badge";
import { Axe, BarChart2, Swords } from "lucide-react";

const Details = () => {
  const { data, loading, error } = usePokemonState();
  const { getPokemonById, toggleFavourite } = usePokemonAction();

  useEffect(() => {
    const id = Number(window.location.pathname.split("/")[1]);
    getPokemonById(id);
  }, []);

  if (loading) return <Loader />;
  if (error) return <h1>There has been an error. Try to refresh the page.</h1>;

  return (
    <>
      <div className={styles.heading}>
        <Link href="/">Go back</Link>
        <div className="d-flex justify-content-between">
          <h1 className="mt-2">{data.selectedPokemon.name}</h1>
          <button
            className="btn btn-primary h-fit-content"
            onClick={() => toggleFavourite(data.selectedPokemon.id)}
          >
            {data.selectedPokemon.isFavourite
              ? "Unfavourite this Pokemon"
              : "Add to Favourite"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className={`col-xs-12 col-md-6 ${styles.imgContainer}`}>
          {data.selectedPokemon.sprites && (
            <Image
              src={data.selectedPokemon.sprites?.front_default}
              className="img-fluid rounded-start"
              alt="Pokemon image"
              fill
            />
          )}
        </div>
        <div className="offset-xs-2 col-xs-12 col-md-4">
          <h5 className="mt-3 mb-0">General info:</h5>
          <label className="mt-1 mb-1">
            This Pokemon weights {data.selectedPokemon.weight} PokeGrams and has
            a height of {data.selectedPokemon.height} PokeMeters.
          </label>

          <h6 className="mt-3 mb-1">Experience Level: </h6>
          <Badge
            text={`Exp. ${data.selectedPokemon.base_experience}`}
            color="warning"
          >
            <Swords size={20} />
          </Badge>

          {data.selectedPokemon.moves && (
            <>
              <h6 className="mt-3 mb-1">Available moves: </h6>
              <Badge
                text={`${data.selectedPokemon.moves?.length}`}
                color="primary"
              >
                <BarChart2 size={20} />
              </Badge>
            </>
          )}

          {data.selectedPokemon.types && (
            <>
              <h6 className="mt-3 mb-1">Pokemon type: </h6>
              {data.selectedPokemon.types?.map(({ type }) => (
                <Badge key={type.name} text={`${type.name}`}>
                  <Axe size={20} />
                </Badge>
              ))}
            </>
          )}

          {data.selectedPokemon.stats && (
            <>
              <h6 className="mt-3 mb-1">General stats: </h6>
              <ul>
                {data.selectedPokemon.stats?.map(({ stat, base_stat }) => (
                  <li key={stat.name}>
                    <b>{stat.name}</b>: {base_stat}
                  </li>
                ))}
              </ul>
            </>
          )}

          {data.selectedPokemon.abilities && (
            <>
              <h6 className="mt-3 mb-1">Abilities: </h6>
              <ul>
                {data.selectedPokemon.abilities?.map(({ ability }) => (
                  <li key={ability.name}>
                    <b>{ability.name}</b>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
