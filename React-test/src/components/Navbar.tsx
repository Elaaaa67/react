import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("authToken"); // Vérifie si l'utilisateur est connecté

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-neutral-900 border-b border-red-600">
      <img
        src="public/Valorant_logo_-_pink_color_version.svg.png"
        alt="Logo"
        className="h-20 w-30"
      />
      <h1 className="text-2xl font-bold text-gray-100 justify-center">
        Valorant App
      </h1>
      <nav className="flex gap-6 text-gray-300 font-medium">
        <Link to="/" style={{ marginRight: "1rem" }}>Accueil</Link>
        <Link to="/agents" style={{ marginRight: "1rem" }}>Agents</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>À propos</Link>
        <Link to="/contact" style={{ marginRight: "1rem" }}>Contact</Link>

        {token ? (
          // Si connecté → Déconnexion
          <Link to="/logout">Déconnexion</Link>
        ) : (
          // Si pas connecté → Se connecter
          <Link to="/login">Se connecter</Link>
        )}
      </nav>
    </header>
  );
}
