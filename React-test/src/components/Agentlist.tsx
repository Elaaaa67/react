import { mockAgents } from "../models/mock-agents";
import Agent from "../models/Agents";
import { useState } from "react";
import AgentsCard from "./Agentscard";
import AgentService from "../services/agentService";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AgentList() {

  const [agentList, setAgentList] = useState<Agent[]>(mockAgents);

  const deleteAgent = (uuid: number) => {
    const newAgentList = agentList.filter((agent) => agent.uuid !== String(uuid));
    setAgentList(newAgentList);
  };



  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);

  useEffect(() => {
    AgentService.getAgents().then((data) => {

      setFilteredAgents(data);
    });

  }, []);

  const handleRemove = (uuid: string) => {
    setFilteredAgents((prev) => prev.filter((a) => a.uuid !== uuid));
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredAgents.map((agent) => (
        <AgentsCard key={`${agent.uuid}-${agent.display_name}`} agent={agent} removeAgent={handleRemove} />
      ))}
    </div>

  );


}
