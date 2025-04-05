import { useEffect, useState } from "react";
import { PokemonModalProps } from "../page";

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(pokemon);

    useEffect(() => {
        if (pokemon) {
            setCurrentPokemon(pokemon); // Update to the new Pokémon
            setIsRendered(true);
            setTimeout(() => setIsVisible(true), 10); // Slight delay to trigger animation
        } else {
            setIsVisible(false);
            setTimeout(() => setIsRendered(false), 300); // Match duration-300 for fade-out
        }
    }, [pokemon]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsRendered(false);
            onClose(); // Call the onClose callback after fade-out
        }, 300); // Match duration-300 for fade-out
    };

    if (!isRendered || !currentPokemon) return null;

    return (
        <div
            onClick={handleClose} // Close modal on background click
            className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent background click from closing modal
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-95"
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                {currentPokemon.name} #{currentPokemon.id}
                            </h2>
                            <div className="flex space-x-2 mt-1">
                                <span
                                    key={currentPokemon.type1}
                                    className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                >
                                    {currentPokemon.type1}
                                </span>
                                {currentPokemon.type2 && (
                                    <span
                                        key={currentPokemon.type2}
                                        className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                    >
                                        {currentPokemon.type2}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                        >
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
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">HP</h3>
                            <p className="text-gray-600 dark:text-gray-300">{currentPokemon.stats.hp}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Attack</h3>
                            <p className="text-gray-600 dark:text-gray-300">{currentPokemon.stats.attack}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Defense</h3>
                            <p className="text-gray-600 dark:text-gray-300">{currentPokemon.stats.defense}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Speed</h3>
                            <p className="text-gray-600 dark:text-gray-300">{currentPokemon.stats.speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;
