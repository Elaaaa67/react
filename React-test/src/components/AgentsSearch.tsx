import { useState } from "react";

type Props = {
  onSearch: (term: string) => void;
  onFilterRole: (role: string) => void;
};

export default function AgentsSearch({ onSearch, onFilterRole }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRole(value);
    onFilterRole(value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 p-4 bg-white dark:bg-slate-800 rounded-xl shadow">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un agent..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full md:w-1/2 border border-gray-300 rounded-lg px-3 py-2 dark:bg-slate-700 dark:text-white"
      />

      {/* Liste déroulante */}
      <select
        value={selectedRole}
        onChange={handleRoleChange}
        className="w-full md:w-1/3 border border-gray-300 rounded-lg px-3 py-2 dark:bg-slate-700 dark:text-white"
      >
        <option value="">Tous les rôles</option>
        <option value="Duelist">Duelist</option>
        <option value="Controller">Controller</option>
        <option value="Initiator">Initiator</option>
        <option value="Sentinel">Sentinel</option>
      </select>
    </div>
  );
}
