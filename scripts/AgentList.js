import { useAgents } from "./BusinessProvider.js";
import { Agent } from "./Agent.js";

const contentTarget = document.getElementsByClassName("agents")[0];

export const AgentList = () => {
    const agentArray = useAgents();

    contentTarget.innerHTML += "<h2>Purchasing Agents</h2>";

    agentArray.forEach((agent) => {
        contentTarget.innerHTML += Agent(agent);
    });

};

