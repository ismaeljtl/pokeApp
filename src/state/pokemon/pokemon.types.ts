export interface IPokemonContext {
  state: IPokemonState;
  dispatch: ({ type }: IPokemonAction) => void;
}

export interface IPokemonState {
  data: { pokemonList: IPokemon[]; selectedPokemon: IPokemon };
  loading: boolean;
  error: boolean;
}

export interface IPokemonAction {
  type:
    | PokemonActionEnum.GET_ALL_POKEMONS_BEGIN
    | PokemonActionEnum.GET_ALL_POKEMONS_SUCCESS
    | PokemonActionEnum.GET_ALL_POKEMONS_FAILURE
    | PokemonActionEnum.GET_POKEMON_BEGIN
    | PokemonActionEnum.GET_POKEMON_SUCCESS
    | PokemonActionEnum.GET_POKEMON_FAILURE
    | PokemonActionEnum.TOGGLE_FAVOURITE;
  payload?: any;
}

export enum PokemonActionEnum {
  GET_ALL_POKEMONS_BEGIN = "GET_ALL_POKEMONS_BEGIN",
  GET_ALL_POKEMONS_SUCCESS = "GET_ALL_POKEMONS_SUCCESS",
  GET_ALL_POKEMONS_FAILURE = "GET_ALL_POKEMONS_FAILURE",
  GET_POKEMON_BEGIN = "GET_POKEMON_BEGIN",
  GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS",
  GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE",
  TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE",
}

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: ISpecies[];
  game_indices: IGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
  isFavourite: boolean;
}

export interface IAbility {
  ability: ISpecies;
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IGameIndex {
  game_index: number;
  version: ISpecies;
}

export interface IMove {
  move: ISpecies;
  version_group_details: IVersionGroupDetail[];
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: ISpecies;
  version_group: ISpecies;
}

export interface IGenerationI {
  "red-blue": IRedBlue;
  yellow: IRedBlue;
}

export interface IGenerationIi {
  crystal: ICrystal;
  gold: IGold;
  silver: IGold;
}

export interface IGenerationIii {
  emerald: IOfficialArtwork;
  "firered-leafgreen": IGold;
  "ruby-sapphire": IGold;
}

export interface IGenerationIv {
  "diamond-pearl": ISprites;
  "heartgold-soulsilver": ISprites;
  platinum: ISprites;
}

export interface IGenerationV {
  "black-white": ISprites;
}

export interface IVersions {
  "generation-i": IGenerationI;
  "generation-ii": IGenerationIi;
  "generation-iii": IGenerationIii;
  "generation-iv": IGenerationIv;
  "generation-v": IGenerationV;
  "generation-vi": { [key: string]: IHome };
  "generation-vii": IGenerationVii;
  "generation-viii": IGenerationViii;
}

export interface ISprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: IOther;
  versions?: IVersions;
  animated?: ISprites;
}

export interface IRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface ICrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface IGold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface IOfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface IHome {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface IGenerationVii {
  icons: IDreamWorld;
  "ultra-sun-ultra-moon": IHome;
}

export interface IDreamWorld {
  front_default: string;
  front_female: null;
}

export interface IGenerationViii {
  icons: IDreamWorld;
}

export interface IOther {
  dream_world: IDreamWorld;
  home: IHome;
  "official-artwork": IOfficialArtwork;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: ISpecies;
}

export interface IType {
  slot: number;
  type: ISpecies;
}
