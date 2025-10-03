
import StatutUser from "./methode1";
export default function Navbar() {
  return (

<header className="flex items-center justify-between px-8 py-4 bg-neutral-900 border-b border-red-600">
<img src="public/Valorant_logo_-_pink_color_version.svg.png" alt="Logo" className="h-20 w-30"/>
<h1 className="text-4xl font-bold text-gray-100">Valorant App</h1>
<nav className="flex gap-6 text-gray-300 font-medium">
<a href="#" className="hover:text-red-500 transition">Accueil</a>
<a href="#" className="hover:text-red-500 transition">Services</a>
<a href="#" className="hover:text-red-500 transition">À propos</a>
<a href="#" className="hover:text-red-500 transition">Contact</a>
<StatutUser Isconnected={true}></StatutUser>
</nav>
</header>
    )
    }