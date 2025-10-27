let consonants: string[] = ["B", "D", "F", "G", "J", "K", "L", "M", "N", "P", "R", "T", "V"];
let vowels: string[] = ["A", "E", "I", "O", "U"];
let syllable: string[] = [];

for (const c of consonants) {
    for (const v of vowels) {
        syllable.push(c + v);
    }
}

export let syllable_list: string[] = syllable;