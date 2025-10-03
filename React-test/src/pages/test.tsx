import { useState } from "react";

export default function Test(){
    const [name, setName] = useState<string>("React");

    return (
        <div>
            <h1>test {name}</h1>
        
        <button onClick={() => setName("COUCOU LEYLEY")}>Change name</button>
        </div>
    )
}