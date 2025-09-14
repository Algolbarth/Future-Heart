import { Planet } from "../Planet/Class";

export class SolarSystem {
    name: string;
    planets: Planet[] = [];

    constructor(name: string) {
        this.name = name;

        this.planets.push(new Planet("Mercure"));
        this.planets.push(new Planet("Terre"));
        this.planets.push(new Planet("Mars"));
        this.planets.push(new Planet("Jupiter"));
        this.planets.push(new Planet("Saturne"));
    };
};
