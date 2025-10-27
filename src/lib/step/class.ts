import type { Game } from "../game/class";
import type { Word } from "../word/class";

export class Step {
    damage: number = 1;
    size_required: number | undefined;
    syllable_required: string[] = [];

    constructor(game: Game) {
        let word_sizes: number[] = [];
        let syllables: string[] = [];

        for (const word of game.words) {
            if (!word_sizes.includes(word.syllables.length)) {
                word_sizes.push(word.syllables.length);
            }

            for (const syllable of word.syllables) {
                if (!syllables.includes(syllable)) {
                    syllables.push(syllable);
                }
            }
        }

        if (Math.random() < 0.5) {
            this.size_required = word_sizes[Math.floor(Math.random() * word_sizes.length)];
        }
        else {
            this.syllable_required.push(syllables[Math.floor(Math.random() * syllables.length)]);
        }
    };

    check(answer: Word[]) {
        let size: number = 0;
        let syllables: string[] = [];

        for (const word of answer) {
            size += word.syllables.length;

            for (const syllable of word.syllables) {
                if (!syllables.includes(syllable)) {
                    syllables.push(syllable);
                }
            }
        }

        if (this.size_required != undefined && size != this.size_required) {
            return false;
        }

        for (const syllable of this.syllable_required) {
            if (!syllables.includes(syllable)) {
                return false;
            }
        }

        return true;
    };
};