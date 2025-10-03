export default function StatutUser({Isconnected}:{Isconnected:boolean}) {
    return (
<div>
{Isconnected ? (
<a className="text-white bg-black-500">Profil</a>
) : (
<a className="text-white">Se Connecter</a>
)}
</div>
);
}
// Pour l'utiliser :
// <StatutUser Isconnected={true} /> // affichera "Profil"
// <StatutUser Isconnected={false} /> // "Se Connecter"