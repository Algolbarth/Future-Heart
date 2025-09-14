import { Ship } from "../Ship/Class";

export class Game {
    ship: Ship;

    constructor(name: string) {
        this.ship = new Ship(name);
    };
};
