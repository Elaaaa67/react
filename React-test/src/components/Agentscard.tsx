import { useState } from "react";
import Agent from "../models/Agents";

type Props = {
  agent: Agent;
  removeAgent: (id: number) => void;
  borderColor?: string; // couleur par défaut qu'on peut override
};

export default function AgentsCard({
  agent,
  removeAgent,
  borderColor = "",
}: Props) {
  // état local pour gérer la couleur de la bordure
  const [currentBorder, setCurrentBorder] = useState(borderColor);

  const formatDate = (date : Date): string => {
return ` ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

  return (
    <div
      key={agent.id}
      onMouseEnter={() => setCurrentBorder("#0095daff")} // rouge au hover
      onMouseLeave={() => setCurrentBorder(borderColor)} // revient à la valeur par défaut
      className="mx-auto max-w-sm items-center rounded-xl p-6 shadow-lg border-2 border-solid outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 transition-colors duration-300"
      style={{ borderColor: currentBorder }}
    >
      <img src={"../src" + agent.image} alt={agent.name} />

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xl font-bold dark:text-white text-red-500">
          {agent.name}
        </div>
        <p className="text-black-500 dark:text-gray-400">{agent.role}</p>
        <p className="text-black-500 dark:text-gray-400">{formatDate(agent.created)}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={() => removeAgent(agent.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
