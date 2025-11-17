export default function formatDate(release_date: Date | string | undefined): string {
  // Cas où la date est absente
  if (!release_date) return "Date inconnue";

  // Conversion en objet Date si c’est une chaîne
  const date = typeof release_date === "string" ? new Date(release_date) : release_date;

  // Vérification que la date est valide
  if (!(date instanceof Date) || isNaN(date.getTime())) return "Date invalide";

  // Format JJ/MM/AAAA
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
