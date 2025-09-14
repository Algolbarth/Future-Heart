<script lang="ts">
    import type { Game } from "../Game/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import ShipView from "./View.svelte";

    export let page: string;
    export let selected_game: Game | undefined;
</script>

{#if selected_game != undefined}
    <ShipView bind:page bind:game={selected_game} />
{:else}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Ship"} />
{/if}
