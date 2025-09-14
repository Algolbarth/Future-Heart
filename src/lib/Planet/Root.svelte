<script lang="ts">
    import type { Game } from "../Game/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import type { Planet } from "./Class";
    import PlanetView from "./View.svelte";

    export let page: string;
    export let selected_game: Game | undefined;
    export let selected_planet: Planet | undefined;
</script>

{#if selected_game == undefined}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Ship"} />
{:else if selected_planet == undefined}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Ship"} />
{:else}
    <PlanetView bind:page bind:game={selected_game} bind:planet={selected_planet} />
{/if}
