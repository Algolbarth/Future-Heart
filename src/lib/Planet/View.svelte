<script lang="ts">
    import type { Game } from "../Game/Class";
    import type { Planet } from "./Class";

    export let page: string;
    export let game: Game;
    export let planet: Planet;
</script>

<button
    on:click={() => {
        page = "Solar_System";
    }}
>
    {game.solar_system.name}
</button>

<br />
<br />

{planet.name}
