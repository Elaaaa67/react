export default function Agentlist() {
    return (
        <div>
         <h2 className="text-4xl font-bold text-black-100 text-center mt-8">Liste des agents</h2>
         <div className="flex px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/clove.webp" alt="Clove" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Clove</div>
                    <p className="text-gray-500 dark:text-gray-400">Controller</p>
                </div>
            </div>

            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/Reyna.webp" alt="Reyna" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Reyna</div>
                    <p className="text-gray-500 dark:text-gray-400">Duelist</p>
                </div>
            </div>  

            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/Omen.webp" alt="Omen" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Omen</div>
                    <p className="text-gray-500 dark:text-gray-400">Controller</p>
                </div>
            </div>
            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/Gekko.webp" alt="Gekko" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Gekko</div>
                    <p className="text-gray-500 dark:text-gray-400">Initiator</p>
                </div>
            </div>
            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/Vyse.webp" alt="Vyse" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Vyse</div>
                    <p className="text-gray-500 dark:text-gray-400">Sentinels</p>
                </div>
            </div>
            <div className="mx-auto  max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img src="../src/assets/Agentlist/Jett.webp" alt="Jett" />
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-red-500 dark:text-white">Jett</div>
                    <p className="text-gray-500 dark:text-gray-400">Duelist</p>
                </div>
            </div>
        
        </div>
        </div>
    )
}
