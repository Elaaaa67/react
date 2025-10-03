import { mockAgents } from "../models/mock-agents";
import Agent from "../models/Agents";
import { useState } from "react";
import AgentsCard from "./Agentscard";

export default function TeamsCard() {
  const [agentList, setAgentList] = useState<Agent[]>(mockAgents);

  const deleteAgent = (id: number) => {
    const newAgentList = agentList.filter((agent) => agent.id !== id);
    setAgentList(newAgentList);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">
        Nous avons {agentList.length} Agents disponibles
      </h1>

      <div className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentList.map((agent) => (
          <AgentsCard 
          key={agent.id} 
          agent={agent} 
          borderColor="#a81919ff"
          removeAgent={deleteAgent} />
        ))}
      </div>
    </div>
  );
}
