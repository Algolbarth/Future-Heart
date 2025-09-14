<script lang="ts">
    import type { Game } from "../Game/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import GameView from "./View.svelte";

    export let selected_game: Game | undefined;
</script>

{#if selected_game != undefined}
    <GameView />
{:else}
    <ErrorMessage message={"Aucune partie n'est sélectionnée sur la page Game"} />
{/if}
