import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Suppression du token JWT
        localStorage.removeItem("authToken");

        // Redirection vers la page de login
        navigate("/login");
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Déconnexion en cours...</h2>
            <p>Vous allez être redirigé vers la page de connexion.</p>
        </div>
    );
}
