"use client";

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import PokemonModal from "./components/PokemonModal";
import PokemonTable from "./components/PokemonTable";
import { pokemon, Pokemon } from "./data/pokemon";

export interface PokemonTableProps {
    mons: Pokemon[];
    onRowClick: (pokemon: Pokemon) => void;
}

export interface PokemonModalProps {
    pokemon: Pokemon | null;
    onClose: () => void;
}
const Home: NextPage = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    const handleRowClick = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const handleCloseModal = () => {
        setSelectedPokemon(null);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Pokemon Data Viewer</title>
                <meta name="description" content="View Pokemon data" />
            </Head>

            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Pokemon Data Viewer</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <PokemonTable mons={Object.values(pokemon)} onRowClick={handleRowClick} />
                </div>
            </main>

            {selectedPokemon && <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />}
        </div>
    );
};

export default Home;
