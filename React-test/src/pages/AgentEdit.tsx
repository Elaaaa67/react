import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Agent from "../models/Agents";
import AgentService from "../services/agentService";

export default function AgentEdit() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const allRoles = ["Duelist", "Controller", "Sentinel", "Initiator"];

  useEffect(() => {
    AgentService.getAgent(uuid ?? "")
      .then((data) => {
        if (data) {
          // Ensure role is an array for easier handling
          const normalized = {
            ...data,
            role: Array.isArray(data.role) ? data.role : [data.role],
          };
          setAgent(normalized);
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

  const handleRoleChange = (role: string) => {
    if (!agent) return;
    const updatedRoles = agent.role.includes(role)
      ? agent.role.filter((r) => r !== role)
      : [...agent.role, role];
    setAgent({ ...agent, role: updatedRoles });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agent || !uuid) return;

    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...agent,
        role: agent.role.length === 1 ? agent.role[0] : agent.role,
      };

      const res = await fetch(`http://localhost:8000/agent/${uuid}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour");

      setSuccess(true);
      setTimeout(() => navigate(`/agent/${uuid}`), 1000);
    } catch (err) {
      console.error(err);
      setError("Échec de la sauvegarde. Réessaie plus tard.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500 bg-red-50 p-3 rounded-lg max-w-md mx-auto">
        {error}
      </p>
    );
  }

  if (!agent) {
    return (
      <p className="text-center mt-10 text-gray-500">Agent introuvable.</p>
    );
  }

  return (
    <div className="max-w-lg  mx-auto mt-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-all">
      <h1 className="text-3xl font-bold text-center text-red-500 dark:text-white mb-6">
        Modifier {agent.display_name}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Nom */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Nom :
          </label>
          <input
            type="text"
            value={agent.display_name}
            onChange={(e) =>
              setAgent({ ...agent, display_name: e.target.value })
            }
            className="w-full border rounded-lg p-2 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Rôles */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
            Rôles :
          </label>
          <div className="grid grid-cols-2 gap-2">
            {allRoles.map((role) => (
              <label
                key={role}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={agent.role.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="accent-red-500 w-4 h-4"
                />
                <span className="text-gray-700 dark:text-gray-200">
                  {role}
                </span>
              </label>
            ))}
          </div>
         <label className="block mb-4 font-semibold text-gray-700 dark:text-gray-300 mt-4 ">
          description :
        </label>
        <textarea 
          value={agent.description}
          onChange={(e) =>
            setAgent({ ...agent, description: e.target.value })
          }
          className=" p-3 w-full text-sm text-gray-900 bg-gray-50 resize-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </div>


        {/* Feedback */}
        {success && (
          <p className="text-green-600 text-sm text-center mt-2">
            ✅ Modifications enregistrées !
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        {/* Boutons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition disabled:opacity-50"
            disabled={saving}
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {saving ? "Enregistrement..." : "Enregistrer"}
          </button>
        </div>
      </form>
    </div>
  );
}
