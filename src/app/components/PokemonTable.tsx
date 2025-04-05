import { PokemonTableProps } from "../page";

const PokemonTable: React.FC<PokemonTableProps> = ({ mons, onRowClick }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type(s)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            HP
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Attack
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {mons.map((pokemon) => (
                        <tr
                            key={pokemon.id}
                            onClick={() => onRowClick(pokemon)}
                            className="hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {pokemon.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {pokemon.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pokemon.type1 + (pokemon.type2 ? ` / ${pokemon.type2}` : "")}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pokemon.stats.hp}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pokemon.stats.attack}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PokemonTable;
