import { Item } from "../Class";

export class Teleporteur extends Item {
    constructor(stack: number = 1) {
        super("Téléporteur", stack, 100);
    };
};
