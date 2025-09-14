<script lang="ts">
    import type { Game } from "../Game/Class";
    import type { Planet } from "../Planet/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import SolarSystemView from "./View.svelte";

    export let page: string;
    export let selected_game: Game | undefined;
    export let selected_planet: Planet | undefined;
</script>

{#if selected_game != undefined}
    <SolarSystemView bind:page bind:game={selected_game} bind:selected_planet />
{:else}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Solar_System"} />
{/if}
