<script lang="ts">
    import type { Game } from "./Class";

    export let game: Game;
</script>

<content>
    {game.ship.name}
</content>

<style>
    content {
        display: grid;
        grid-template-columns: auto;
    }
</style>