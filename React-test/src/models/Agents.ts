export default class Agent {
    id: number;
    name: string;
    role: string;
    image: string;
    created: Date = new Date();
    constructor(
        id: number, 
        name: string = "", 
        role: string = "", 
        image: string = "",
        created?: Date
    ) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.image = image;
        if (created) this.created = created;
    }
}