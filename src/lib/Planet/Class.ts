import { Region } from "../Region/Class";

export class Planet {
    name: string;
    regions: Region[] = [];

    constructor(name: string) {
        this.name = name;

        this.regions.push(new Region("Europe"));
        this.regions.push(new Region("Asie"));
        this.regions.push(new Region("Afrique"));
    };
};
