<script lang="ts">
    import type { Planet } from "../Planet/Class";
    import type { Game } from "../Game/Class";

    export let page: string;
    export let game: Game;
    export let selected_planet: Planet | undefined;
</script>

{game.solar_system.name}

<br />
<br />

<button
    on:click={() => {
        page = "Ship";
    }}
>
    {game.ship.name}
</button>

<br />
<br />

{#each game.solar_system.planets as planet}
    {#if selected_planet == planet}
        <button
            class="selected"
            on:click={() => {
                page = "Planet";
            }}
        >
            {planet.name}
        </button>
    {:else}
        <button
            on:click={() => {
                selected_planet = planet;
                page = "Planet";
            }}
        >
            {planet.name}
        </button>
    {/if}

    <br />
{/each}
