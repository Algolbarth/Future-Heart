import { Game } from "../Game/Class";

export class Server {
    name: string;
    games: Game[] = [];

    constructor(name: string) {
        this.name = name;
    };
};
