<script lang="ts">
    import Answer from "./answer.svelte";
    import type { Game } from "../game/class";
    import Condition from "./condition.svelte";

    export let game: Game;
</script>

<div class="answer">
    <div>
        <Condition bind:game />

        <br />

        <Answer bind:game />
    </div>
</div>

<style>
    div.answer {
        display: grid;
        align-items: center;
        text-align: center;
    }
</style>
