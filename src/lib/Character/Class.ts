import { Scanner, Teleporteur } from "../Item/Data";
import { Stockage } from "../Stockage/Class";

export class Character {
    name: string;
    inventory: Stockage;

    constructor(name: string) {
        this.name = name;
        this.inventory = new Stockage("Inventaire");
        this.inventory.add(new Scanner(5));
        this.inventory.add(new Teleporteur(5));
    };
};
