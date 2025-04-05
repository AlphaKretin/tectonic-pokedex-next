import { PokemonType } from "../data/pokemon";

export function getTypeColourClass(type: PokemonType): string {
    switch (type) {
        case "Fire":
            return "red-500";
        case "Water":
            return "blue-500";
        case "Grass":
            return "green-500";
        case "Electric":
            return "yellow-500";
        case "Psychic":
            return "purple-500";
        case "Ice":
            return "cyan-500";
        case "Dragon":
            return "indigo-500";
        case "Dark":
            return "gray-800";
        case "Fairy":
            return "pink-500";
        case "Fighting":
            return "orange-500";
        case "Flying":
            return "sky-500";
        case "Poison":
            return "purple-700";
        case "Ground":
            return "yellow-700";
        case "Rock":
            return "gray-600";
        case "Bug":
            return "green-700";
        case "Ghost":
            return "indigo-700";
        case "Steel":
            return "gray-400";
        default:
            return "gray-500";
    }
}
