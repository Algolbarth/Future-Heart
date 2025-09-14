<script lang="ts">
    import type { Region } from "../Region/Class";
    import type { Planet } from "../Planet/Class";
    import type { Zone } from "../Zone/Class";

    export let page: string;
    export let planet: Planet;
    export let region: Region;
    export let selected_zone: Zone | undefined;
</script>

<button
    on:click={() => {
        page = "Planet";
    }}
>
    {planet.name}
</button>

<br />
<br />

{region.name}

<br />
<br />

{#each region.zones as zone}
    {#if selected_zone == zone}
        <button
            class="selected"
            on:click={() => {
                page = "Zone";
            }}
        >
            {zone.name}
        </button>
    {:else}
        <button
            on:click={() => {
                selected_zone = zone;
                page = "Zone";
            }}
        >
            {zone.name}
        </button>
    {/if}

    <br />
{/each}
