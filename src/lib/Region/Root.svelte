<script lang="ts">
    import type { Region } from "../Region/Class";
    import type { Planet } from "../Planet/Class";
    import type { Zone } from "../Zone/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import RegionView from "./View.svelte";

    export let page: string;
    export let selected_planet: Planet | undefined;
    export let selected_region: Region | undefined;
    export let selected_zone: Zone | undefined;
</script>

{#if selected_region == undefined}
    <ErrorMessage message={"Aucune région n'est sélectionnée sur la page Region"} />
{:else if selected_planet == undefined}
    <ErrorMessage message={"Aucune planète n'est sélectionnée sur la page Region"} />
{:else}
    <RegionView bind:page bind:planet={selected_planet} bind:region={selected_region} bind:selected_zone />
{/if}
