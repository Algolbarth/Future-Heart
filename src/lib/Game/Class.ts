import { Character } from "../Character/Class";
import { Ship } from "../Ship/Class";
import { SolarSystem } from "../SolarSystem/Class";

export class Game {
    crew: Character[] = [];
    ship: Ship;
    solar_system: SolarSystem;

    constructor(ship_name: string, character_name: string) {
        this.ship = new Ship(ship_name);
        this.crew.push(new Character(character_name));
        this.solar_system = new SolarSystem("Système 1");
    };
};
