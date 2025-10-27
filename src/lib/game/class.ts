import type { Word } from "../word/class";
import { get_random_word } from "../word/random";
import { Step } from "../step/class";

export class Game {
    life: number = 3;
    max_life: number = 3;
    words: Word[] = [];
    score: number = 0;
    step: Step;
    page: string = "step";
    answer: Word[] = [];

    constructor() {
        this.words.push(get_random_word(3));
        this.words.push(get_random_word(4));
        this.words.push(get_random_word(5));

        this.step = new Step(this);
    };

    check_answer() {
        let result: boolean = this.step.check(this.answer);

        if (result) {
            this.score += 1;
            this.step = new Step(this);
        }
        else {
            this.damage(this.step.damage);
        }
    };

    damage(value: number) {
        this.life -= value;
        if (this.life <= 0) {
            this.page = "game-over";
        }
    };
};