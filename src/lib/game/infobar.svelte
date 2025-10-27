<script lang="ts">
    import type { Game } from "./class";
    import Lifebar from "./lifebar.svelte";

    export let game: Game;
</script>

<div class="infobar">
    <Lifebar bind:game />

    <div></div>

    <div class="score">
        Score : {game.score}
    </div>
</div>

<style>
    div.infobar {
        background: var(--infobar);

        display: grid;
        grid-template-columns: 4fr 5fr 1fr;

        align-items: center;
    }

    div.score {
        text-align: center;
    }
</style>
