import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import { IPokemon } from "@/state/pokemon/pokemon.types";
import { Star, Swords } from "lucide-react";
import { localStorageHelper } from "@/helpers/localStorageHelper";
import Badge from "../badge/Badge";

const Card: React.FC<{
  pokemon: IPokemon;
  isFavourite: boolean | undefined;
}> = ({ pokemon, isFavourite = false }) => {
  return (
    <Link
      href={`/${pokemon.id}`}
      className={`col ${styles.pokemonCard}`}
      key={pokemon.id}
    >
      <div className={`card ${styles.card}`}>
        {
          <Star
            data-testid="favIcon"
            className={isFavourite ? styles.filled : styles.outlined}
          />
        }
        <div className="row">
          <div className={`col-4 ${styles.imageContainer}`}>
            <Image
              src={pokemon.sprites.front_default}
              className="img-fluid rounded-start"
              alt={pokemon.name}
              width={1042}
              height={1042}
            />
          </div>
          <div className="col-8">
            <div className={`${styles.details} card-body`}>
              <h3 className="card-title mb-2">{pokemon.name}</h3>
              <Badge text={`Exp. ${pokemon.base_experience}`}>
                <Swords size={16} />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
