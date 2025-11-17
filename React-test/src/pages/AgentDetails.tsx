import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Agent from "../models/Agents";
import formatDate from "../helpers/formatDate";
import colorRole from "../helpers/colorRole";
import AgentService from "../services/agentService";

export default function AgentDetails() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AgentService.getAgent(uuid ?? "")
      .then((data) => {
        if (data) {
          setAgent(data);
        } else {
          setError("Agent non trouvé.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger cet agent.");
        setLoading(false);
      });
  }, [uuid]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!agent) return <p className="text-center mt-10 text-gray-500">Agent introuvable.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-2 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-300 dark:bg-gray-600 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition"
      >
        ← Retour
      </button>

      <div
        key={agent.uuid}
        className="flex flex-col items-center text-center"
      >
        
        <img src={agent.full_portrait ?? undefined} alt={agent.displayName} className="w-full rounded-lg" />
        

        <h1 className="text-3xl font-bold text-red-500 dark:text-white mb-2">{agent.displayName}</h1>

        <p
          className={`text-white px-4 py-1 rounded-md ${colorRole(
            agent.role
          )} mb-3`}
        >
          {agent.role}
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          Créé le : <strong>{formatDate(agent.release_date)}</strong>
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          Description : <strong>{agent.description}</strong>
        </p>

        <div className="mt-6 flex gap-4">
          <button
          onClick={() => navigate(`/dashboard/agents/${agent.uuid}/edit`)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Modifier
        </button>
          <button
            onClick={() => navigate("/agents")}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    </div>
  );
}
