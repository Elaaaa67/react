export default class Agent {
    id: number;
    name: string;
    role: string;
    image: string;
    constructor(
        id: number, 
        name: string = "", 
        role: string = "", 
        image: string = "",) 
    
    {
        this.id = id;
        this.name = name;
        this.role = role;
        this.image = image;
    }
}