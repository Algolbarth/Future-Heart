import { Item } from "../Class";

export class Scanner extends Item {
    constructor(stack: number = 1) {
        super("Scanner", stack, 100);
    };
};
