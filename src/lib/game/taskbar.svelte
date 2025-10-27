<script lang="ts">
    import type { Game } from "./class";

    export let game: Game;

    function show_answer() {
        game.page = "step";
    }

    function show_register() {
        game.page = "register";
    }
</script>

<div class="taskbar">
    {#if game.life > 0}
        <button on:click={show_answer}>Épreuve</button>

        <button on:click={show_register}>Registre</button>
    {/if}
</div>

<style>
    div.taskbar {
        background: var(--taskbar);

        display: grid;
        grid-template-rows: repeat(10, 1fr);
    }

    button {
        background: var(--task);
        color: var(--color);
    }

    button:hover {
        background: var(--hovertask);
    }
</style>
