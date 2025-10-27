export class Word {
    syllables: string[];

    constructor(syllables: string[]) {
        this.syllables = syllables;
    };

    name() {
        let total: string = "";
        for (const s of this.syllables) {
            total += s;
        }
        return total;
    };
};