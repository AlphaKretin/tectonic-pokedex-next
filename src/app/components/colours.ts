import { Pokemon, PokemonType } from "../data/pokemon";

export function getTypeBadgeColourClass(type: PokemonType) {
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

export function getTypeGradient(pokemon: Pokemon): string {
    if (pokemon.type2) {
        const type1 = getTypeGradientFromColourClass(pokemon.type1);
        const type2 = getTypeGradientToColourClass(pokemon.type2);
        return `bg-linear-to-r ${type1} ${type2}`;
    }
    return getTypeGradientSolidColourClass(pokemon.type1);
}

// this sucks i really want to be able to use the same value for "from" and "to" for consistency
// but tailwind believes you shouldn't ever generate class names dynamically so fuck
// "pretty serious anti-pattern" my ass how is this better
function getTypeGradientFromColourClass(type: PokemonType): string {
    switch (type) {
        case "Fire":
            return "from-red-900";
        case "Water":
            return "from-blue-900";
        case "Grass":
            return "from-green-900";
        case "Electric":
            return "from-yellow-900";
        case "Psychic":
            return "from-purple-900";
        case "Ice":
            return "from-cyan-900";
        case "Dragon":
            return "from-indigo-900";
        case "Dark":
            return "from-gray-800";
        case "Fairy":
            return "from-pink-900";
        case "Fighting":
            return "from-orange-900";
        case "Flying":
            return "from-sky-900";
        case "Poison":
            return "from-purple-700";
        case "Ground":
            return "from-yellow-700";
        case "Rock":
            return "from-gray-600";
        case "Bug":
            return "from-green-700";
        case "Ghost":
            return "from-indigo-700";
        case "Steel":
            return "from-gray-400";
        default:
            return "from-gray-900";
    }
}

function getTypeGradientToColourClass(type: PokemonType): string {
    switch (type) {
        case "Fire":
            return "to-red-900";
        case "Water":
            return "to-blue-900";
        case "Grass":
            return "to-green-900";
        case "Electric":
            return "to-yellow-900";
        case "Psychic":
            return "to-purple-900";
        case "Ice":
            return "to-cyan-900";
        case "Dragon":
            return "to-indigo-900";
        case "Dark":
            return "to-gray-800";
        case "Fairy":
            return "to-pink-900";
        case "Fighting":
            return "to-orange-900";
        case "Flying":
            return "to-sky-900";
        case "Poison":
            return "to-purple-700";
        case "Ground":
            return "to-yellow-700";
        case "Rock":
            return "to-gray-600";
        case "Bug":
            return "to-green-700";
        case "Ghost":
            return "to-indigo-700";
        case "Steel":
            return "to-gray-400";
        default:
            return "to-gray-900";
    }
}

function getTypeGradientSolidColourClass(type: PokemonType): string {
    switch (type) {
        case "Fire":
            return "bg-red-900";
        case "Water":
            return "bg-blue-900";
        case "Grass":
            return "bg-green-900";
        case "Electric":
            return "bg-yellow-900";
        case "Psychic":
            return "bg-purple-900";
        case "Ice":
            return "bg-cyan-900";
        case "Dragon":
            return "bg-indigo-900";
        case "Dark":
            return "bg-gray-800";
        case "Fairy":
            return "bg-pink-900";
        case "Fighting":
            return "bg-orange-900";
        case "Flying":
            return "bg-sky-900";
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
            return "bg-gray-900";
    }
}
