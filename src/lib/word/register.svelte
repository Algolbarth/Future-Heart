<script lang="ts">
    import type { Game } from "../game/class";
    import type { Word } from "./class";

    export let game: Game;

    function add_word(word: Word) {
        game.answer.push(word);
        game.page = "step";
    }
</script>

<div class="register">
    {#each game.words as word}
        <button
            on:click={() => {
                add_word(word);
            }}
        >
            {#each word.syllables as s}{s}{/each}
        </button>

        <br />
    {/each}
</div>

<style>
    div.register {
        padding: 8px;
    }

    button {
        color: var(--color);
    }
</style>
