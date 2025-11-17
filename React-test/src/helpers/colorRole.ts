export default function colorRole(roleName?: string | null): string {
  if (!roleName || typeof roleName !== "string") return "bg-gray-300 text-black";

  switch (roleName.toLowerCase()) {
    case "duelist": return "bg-red-500 text-white";
    case "controller": return "bg-blue-500 text-white";
    case "sentinel": return "bg-green-500 text-white";
    case "initiator": return "bg-yellow-500 text-black";
    default: return "bg-gray-300 text-black";
  }
}
