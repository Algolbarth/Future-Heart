import { Word } from "./class";
import { syllable_list } from "./syllable";

export function get_random_word(name_size: number = 3 + Math.floor(Math.random() * 3)) {
    let syllables: string[] = [];
    for (let i = 0; i < name_size; i++) {
        syllables.push(get_random_syllable());
    }
    let word: Word = new Word(syllables);
    return word;
};

function get_random_syllable() {
    return syllable_list[Math.floor(Math.random() * syllable_list.length)];
};