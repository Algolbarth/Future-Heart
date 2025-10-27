<script lang="ts">
    import { Game } from "./lib/game/class";
    import Infobar from "./lib/game/infobar.svelte";
    import Step from "./lib/step/step.svelte";
    import Taskbar from "./lib/game/taskbar.svelte";
    import Register from "./lib/word/register.svelte";
    import GameOver from "./lib/game/game-over.svelte";

    let game: Game = new Game();
</script>

<div class="container-infobar">
    <Infobar bind:game />

    <div class="container-taskbar">
        {#if game.page == "step"}
            <Step bind:game />
        {:else if game.page == "register"}
            <Register bind:game />
        {:else if game.page == "game-over"}
            <GameOver bind:game />
        {/if}

        <Taskbar bind:game />
    </div>
</div>

<style>
    div.container-infobar {
        position:fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-rows: 1fr 9fr;
    }

    div.container-taskbar {
        display: grid;
        grid-template-columns: 9fr 1fr;
    }
</style>