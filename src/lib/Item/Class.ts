export class Item {
    name: string;
    stack: number;
    max_stack: number;

    constructor(name: string, stack: number = 1, max_stack: number = 1) {
        this.name = name;
        this.stack = stack;
        this.max_stack = max_stack;

        if (this.stack > this.max_stack) {
            this.stack = this.max_stack;
        }
    };

    isFull = () => {
        return this.stack == this.max_stack;
    };

    isNotFull = () => {
        return !this.isFull();
    };
};
