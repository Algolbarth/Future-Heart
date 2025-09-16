import type { Item } from "../Item/Class";

export class Stockage {
    name: string;
    items: Item[] = [];

    constructor(name: string) {
        this.name = name;
    };

    find = (item_name: string) => {
        let array: Item[] = [];
        for (const item of this.items) {
            if (item.name == item_name) {
                array.push(item);
            }
        }
        return array;
    };

    findStack = (item_name: string) => {
        let similar_items = this.find(item_name);
        for (const item of similar_items) {
            if (item.isNotFull()) {
                return item;
            }
        }
        return undefined;
    };
    
    add = (item: Item) => {
        let remaining_stack = item.stack;
        while (remaining_stack > 0) {
            let existing_stack = this.findStack(item.name);

            if (existing_stack != undefined) {
                if (existing_stack.stack + remaining_stack > item.max_stack) {
                    remaining_stack -= item.max_stack - existing_stack.stack;
                    existing_stack.stack = item.max_stack;
                }
                else {
                    existing_stack.stack += item.stack;
                    remaining_stack = 0;
                }
            }
            else {
                item.stack = remaining_stack;
                remaining_stack = 0;
                this.items.push(item);
            }
        }
    };

    remove = (item: Item) => {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
                return 0;
            }
        }
    };
};
