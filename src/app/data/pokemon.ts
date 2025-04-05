import loadedPokemon from "public/pokemon.json";

export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spatk: number;
    spdef: number;
}

export const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
    "Mutant",
] as const;

export type PokemonType = (typeof pokemonTypes)[number];

export class Pokemon {
    id: string;
    name: string;
    dex: number;
    type1: PokemonType;
    type2?: PokemonType;
    stats: Stats;
    moves: string[];
    constructor(loadedPokemon: LoadedPokemon, i: number) {
        this.id = loadedPokemon.id;
        this.name = loadedPokemon.name;
        this.type1 = loadedPokemon.type1 as PokemonType;
        this.type2 = loadedPokemon.type2 ? (loadedPokemon.type2 as PokemonType) : undefined;
        this.stats = loadedPokemon.stats;
        this.moves = loadedPokemon.moves;
        this.dex = i + 1;
    }
}

interface LoadedPokemon {
    id: string;
    name: string;
    type1: string;
    type2: string;
    stats: Stats;
    moves: string[];
}

export const pokemon: Record<string, Pokemon> = Object.fromEntries(
    Object.entries(loadedPokemon).map(([id, mon], i) => [id, new Pokemon(mon, i)])
);
