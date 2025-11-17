import React from "react";
import { useParams } from "react-router-dom";
const Agent: React.FC = () => {
const { id } = useParams<{ id: string }>();
return (
<div style={{ padding: "2rem" }}>
<h1>Profil de l'agent</h1>
<p>
Bienvenue sur la page de l’agent avec l’ID :
<strong>{id}</strong>
</p>
</div>
);
};
export default Agent;