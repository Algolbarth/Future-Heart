<script lang="ts">
    import { Game } from "./class";

    export let game: Game;

    function reset() {
        game = new Game();
    }
</script>

<div class="game-over">
    <div>
        <button on:click={reset}>Recommencer</button>
    </div>
</div>

<style>
    div.game-over {
        display: grid;
        align-items: center;
        text-align: center;
    }
</style>
