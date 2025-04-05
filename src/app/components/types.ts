import { Pokemon } from "../data/pokemon";

export interface PokemonTableProps {
    pokemons: Pokemon[];
    onRowClick: (pokemon: Pokemon) => void;
}

export interface PokemonModalProps {
    pokemon: Pokemon | null;
    onClose: () => void;
}
