import { PokemonModalProps } from "../page";

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
    if (!pokemon) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                {pokemon.name} #{pokemon.id}
                            </h2>
                            <div className="flex space-x-2 mt-1">
                                <span
                                    key={pokemon.type1}
                                    className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                                >
                                    {pokemon.type1}
                                </span>
                                {pokemon.type2 && (
                                    <span
                                        key={pokemon.type2}
                                        className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                                    >
                                        {pokemon.type2}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <div className="md:col-span-1">
                            {pokemon.artwork && (
                                <img
                                    src={pokemon.artwork}
                                    alt={pokemon.name}
                                    className="w-full h-auto rounded-lg bg-gray-100"
                                />
                            )}
                        </div> */}

                        <div className="md:col-span-2">
                            {/* {pokemon.description && <p className="text-gray-700 mb-4">{pokemon.description}</p>} */}

                            <div className="grid grid-cols-2 gap-4">
                                {/* <div>
                                    <h3 className="font-semibold text-gray-800">Height</h3>
                                    <p className="text-gray-600">{pokemon.height || "N/A"} m</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Weight</h3>
                                    <p className="text-gray-600">{pokemon.weight || "N/A"} kg</p>
                                </div> */}
                                <div>
                                    <h3 className="font-semibold text-gray-800">HP</h3>
                                    <p className="text-gray-600">{pokemon.stats.hp}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Attack</h3>
                                    <p className="text-gray-600">{pokemon.stats.attack}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Defense</h3>
                                    <p className="text-gray-600">{pokemon.stats.defense}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Speed</h3>
                                    <p className="text-gray-600">{pokemon.stats.speed}</p>
                                </div>
                            </div>

                            {/* {pokemon.abilities && pokemon.abilities.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-800">Abilities</h3>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {pokemon.abilities.map((ability) => (
                                            <span
                                                key={ability}
                                                className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800"
                                            >
                                                {ability}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;
