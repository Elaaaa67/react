import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Agent from "../models/Agents";


export default function AgentAdd() {
  const navigate = useNavigate();

  // 🔹 Liste des rôles possibles
  const allRoles = ["Duelist", "Controller", "Sentinel", "Initiator",];

  // 🔹 État local pour le nouvel agent
  const [agent, setAgent] = useState<Agent>({
    uuid: 6,
    displayName: "",
    fullPortrait: "",
    role: "",
    releaseDate: new Date(),
    description: "",
  });

  const [error, setError] = useState<string | null>(null);

  // 🔹 Quand on coche / décoche un rôle
  const handleRoleChange = (role: string) => {
    const hasRole = agent.role.includes(role);
    const updatedRoles = hasRole
      ? agent.role.filter((r) => r !== role)
      : [...agent.role, role];
    setAgent({ ...agent, role: updatedRoles });
  };

  // 🔹 Envoi du formulaire (POST)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification basique
    if (!agent.name.trim()) {
      setError("Le nom de l'agent est requis.");
      return;
    }

    const payload = {
      ...agent,
      created: new Date().toISOString(), // pour cohérence backend
    };

    fetch("http://localhost:3001/agents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de l'ajout de l'agent");
        navigate("/dashboard"); // 🔁 Retour à la liste
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible d’ajouter l’agent.");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center text-red-500 dark:text-white mb-6">
        Ajouter un nouvel agent
      </h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* 🔸 Nom */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Nom :
          </label>
          <input
            type="text"
            value={agent.displayName}
            onChange={(e) => setAgent({ ...agent, displayName: e.target.value })}
            placeholder="Ex : Jett"
            className="w-full border rounded-lg p-2 dark:bg-slate-700 dark:text-white"
          />
        </div>

        {/* 🔸 Image */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Image (URL) :
          </label>
          <input
            type="text"
            value={agent.fullPortrait ?? ""}
            onChange={(e) => setAgent({ ...agent, fullPortrait: e.target.value })}
            placeholder="Jett.webp"
            className="w-full border rounded-lg p-2 dark:bg-slate-700 dark:text-white"
          />
          {agent.fullPortrait && (
            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              className="w-32 h-32 mt-2 object-cover rounded-lg shadow-md mx-auto"
            />
          )}
        </div>

        {/* 🔸 Rôles (cases à cocher) */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Rôles :
          </label>
          <div className="grid grid-cols-2 gap-2">
            {allRoles.map((role) => (
              <label key={role} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agent.role.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="accent-red-500"
                />
                <span className="text-gray-700 dark:text-gray-200">{role}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 🔸 Boutons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
