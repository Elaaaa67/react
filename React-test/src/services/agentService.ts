import Agent from "../models/Agents";

export default class AgentService {

    private static getAuthHeaders(extraHeaders: Record<string, string> = {}): HeadersInit {
        const token = localStorage.getItem("authToken");
        return {
            ...extraHeaders,
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        };
    }

    static async getAgents(): Promise<Agent[]> {
        const res = await fetch('http://localhost:8000/agent', {
            headers: this.getAuthHeaders()
        });
        return res.ok ? res.json() : [];
    }

    static async getAgent(uuid: string): Promise<Agent | null> {
        const res = await fetch(`http://localhost:8000/agent/${uuid}`, {
            headers: this.getAuthHeaders()
        });
        if (!res.ok) return null;
        const data = await res.json();
        return this.isEmpty(data) ? null : data;
    }

    static async updateAgent(agent: Agent): Promise<Agent> {
        const res = await fetch(`http://localhost:8000/agent/update/${agent.id}`, {
            method: 'PUT',
            headers: this.getAuthHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(agent)
        });
        return res.json();
    }

    static async deleteAgent(agent: Agent): Promise<{}> {
        const res = await fetch(`http://localhost:8000/agent/delete/${agent.id}`, {
            method: 'DELETE',
            headers: this.getAuthHeaders()
        });
        return res.json();
    }

    static async addAgent(agent: Agent): Promise<Agent> {
        const res = await fetch('http://localhost:8000/agent/create', {
            method: 'POST',
            headers: this.getAuthHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(agent)
        });
        return res.json();
    }

    static async searchAgents(term: string): Promise<Agent[]> {
        const res = await fetch(`http://localhost:8000/agent?search=${term}`, {
            headers: this.getAuthHeaders()
        });
        return res.ok ? res.json() : [];
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    // AuthService.ts
    static logout(): void {
        // Suppression du token
        localStorage.removeItem("authToken");

        // Redirection vers la page de login
        window.location.href = "/login";
        // ou utiliser React Router : navigate("/login")
    }

    static isAuthenticated(): boolean {
        return !!localStorage.getItem("authToken");
    }
}


