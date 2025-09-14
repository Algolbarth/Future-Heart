<script lang="ts">
    import type { Game } from "../Game/Class";

    export let page: string;
    export let game: Game;
</script>

{game.ship.name}

<br />
<br />

<button
    on:click={() => {
        page = "Solar_System";
    }}
>
    Consulter le système solaire
</button>
