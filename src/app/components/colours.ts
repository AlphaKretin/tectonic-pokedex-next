import { PokemonType } from "../data/pokemon";

export function getTypeColourClass(type: PokemonType): string {
    switch (type) {
        case "Fire":
            return "bg-red-500";
        case "Water":
            return "bg-blue-500";
        case "Grass":
            return "bg-green-500";
        case "Electric":
            return "bg-yellow-500";
        case "Psychic":
            return "bg-purple-500";
        case "Ice":
            return "bg-cyan-500";
        case "Dragon":
            return "bg-indigo-500";
        case "Dark":
            return "bg-gray-800";
        case "Fairy":
            return "bg-pink-500";
        case "Fighting":
            return "bg-orange-500";
        case "Flying":
            return "bg-sky-500";
        case "Poison":
            return "bg-purple-700";
        case "Ground":
            return "bg-yellow-700";
        case "Rock":
            return "bg-gray-600";
        case "Bug":
            return "bg-green-700";
        case "Ghost":
            return "bg-indigo-700";
        case "Steel":
            return "bg-gray-400";
        default:
            return "bg-gray-500";
    }
}
