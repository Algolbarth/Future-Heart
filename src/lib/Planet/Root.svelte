<script lang="ts">
    import type { Game } from "../Game/Class";
    import type { Region } from "../Region/Class";
    import type { Planet } from "./Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import PlanetView from "./View.svelte";

    export let page: string;
    export let selected_game: Game | undefined;
    export let selected_planet: Planet | undefined;
    export let selected_region: Region | undefined;
</script>

{#if selected_game == undefined}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Planet"} />
{:else if selected_planet == undefined}
    <ErrorMessage message={"Aucune planète n'est sélectionnée sur la page Planet"} />
{:else}
    <PlanetView bind:page bind:game={selected_game} bind:planet={selected_planet} bind:selected_region />
{/if}
