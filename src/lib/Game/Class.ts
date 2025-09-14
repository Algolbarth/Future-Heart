import { Ship } from "../Ship/Class";
import { SolarSystem } from "../SolarSystem/Class";

export class Game {
    ship: Ship;
    solar_system: SolarSystem;

    constructor(name: string) {
        this.ship = new Ship(name);
        this.solar_system = new SolarSystem("Système 1");
    };
};
