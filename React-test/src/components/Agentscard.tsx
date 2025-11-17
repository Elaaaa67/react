import { useState } from "react";
import Agent from "../models/Agents";
import formatDate from "../helpers/formatDate";
import colorRole from "../helpers/colorRole";
import { useNavigate } from "react-router-dom";

type Props = {
  agent: Agent;
  removeAgent: (id: string) => void;
  borderColor?: string;
};

export default function AgentsCard({
  agent,
  removeAgent,
  borderColor = "",
}: Props) {
  const [currentBorder, setCurrentBorder] = useState(borderColor);
  const navigate = useNavigate();

  // 🔒 Sécurité contre les données manquantes
  if (!agent || !agent.uuid || !agent.display_name || !agent.full_portrait) {
    return <div className="text-red-500">Données de l'agent manquantes ou incomplètes.</div>;
  }

  return (
    <div
      onMouseEnter={() => setCurrentBorder("#ffcc41ff")}
      onMouseLeave={() => setCurrentBorder(borderColor)}
      className="mx-auto max-w-sm items-center rounded-xl p-6 shadow-lg border-1 border-solid outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 transition-colors duration-300"
      style={{ borderColor: currentBorder }}
    >
      <img
        src={agent.full_portrait}
        alt={agent.display_name}
        className="w-full rounded-lg"
      />
      <div className="mt-4 flex flex-col gap-2 text-center">
        <div className="text-xl font-bold dark:text-white text-red-500">
          {agent.display_name}
        </div>

        <p
          className={`text-black-500 dark:text-gray-400 ${colorRole(agent.role)} rounded-sm px-3 py-1 m-1`}
        >
          {agent.role}
        </p>

        <p className="text-black-500 dark:text-gray-400">
  {agent.release_date ? ` ${agent.release_date}` : "Date absente"}        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => removeAgent(agent.uuid)}
          className="bg-red-300 text-black px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 w-full"
        >
          Supprimer
        </button>

        <button
          onClick={() => navigate(`/dashboard/agents/${agent.uuid}/edit`)}
          className="bg-blue-300 text-black px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Modifier
        </button>

        <button
          onClick={() => navigate(`/agents/${agent.uuid}`)}
          className="bg-green-300 text-black px-6 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Détails
        </button>
      </div>
    </div>
  );
}
