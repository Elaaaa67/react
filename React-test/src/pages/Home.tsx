
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Bienvenue sur la page d'accueil
      </h1>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none ">
    <source src="src/asset/Valorantmain.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    </div>
  );
}
