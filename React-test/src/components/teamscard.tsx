import { mockAgents } from "../models/mock-agents"
import Agent from "../models/Agents"
export default function TeamsCard() {

 const roleColors = (agent: Agent) : string => {
        if (agent.role === "Controller") {
            return "bg-cyan-700 text-white"
        } else if (agent.role === "Duelist") {
            return "bg-violet-300 text-white"
        } else if (agent.role === "Initiator") {
            return "bg-lime-600 text-white"
        } else if (agent.role === "Sentinel") {
            return "bg-amber-400 text-white"
        } else {
            return "bg-gray-500 text-white"
        }
    }

    return (
        <div>
        <h1 className="text-2xl font-bold text-center mt-4"> Nous avons {mockAgents.length} Agents disponibles</h1>
        <div className=" flex px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {mockAgents.map((agent) => (
                <div key={agent.id} className={`mx-auto  max-w-sm items-center rounded-xl p-6 shadow-lg outline ${roleColors(agent)} outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10`}>
                    <img src={'../src' + agent.image} alt={agent.name} />
                    <div className="mt-4 flex items-center justify-between">
                        <div className="text-xl font-bold dark:text-white">{agent.name}</div>
                        <p className="text-gray-500 dark:text-gray-400">{agent.role}</p>
                    </div>
                </div>
           ))}
        </div>
    </div>
    )
}