<script lang="ts">
    import type { Game } from "./class";

    export let game: Game;
</script>

<div class="lifebar">
    {#each Array(game.life) as _}
        <div class="full">♥</div>
    {/each}

    {#each Array(game.max_life - game.life) as _}
        <div>♡</div>
    {/each}
</div>

<style>
    div.lifebar {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        text-align: center;
    }

    div.full {
        color: var(--heart);
    }
</style>
