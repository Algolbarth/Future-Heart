import { Zone } from "../Zone/Class";

export class Region {
    name: string;
    zones: Zone[] = [];

    constructor(name: string) {
        this.name = name;

        this.zones.push(new Zone("Capitale"));
    };
};
