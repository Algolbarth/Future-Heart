<script lang="ts">
    import type { Game } from "../game/class";

    export let game: Game;

    function send_answer() {
        if (game.answer.length > 0) {
            game.check_answer();
            game.answer = [];
            game = game;
        }
    }

    function delete_answer() {
        game.answer = [];
    }
</script>

<div class="answer">
    {#if game.answer.length > 0}
        <span class="answer">
            {#each game.answer as a}
                {a.name()}
            {/each}
        </span>
        <button class="delete" on:click={delete_answer}>X</button>
    {:else}
        <span class="answer empty"> Formule </span>
    {/if}

    <br />
    <br />

    <button on:click={send_answer}>Soumettre</button>
</div>

<style>
    span.answer {
        color: var(--answer);
    }

    span.empty {
        color: var(--hovertask);
        font-style: italic;
    }

    button.delete {
        color: var(--heart);

        border: solid;
        border-width: 1px;
        padding: 3px;
    }
</style>
