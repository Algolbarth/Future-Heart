<script lang="ts">
    import type { Server } from "../../Server/Server";

    import ErrorMessage from "../../System/ErrorMessage.svelte";
    import NewGameView from "./View.svelte";

    export let page: string;
    export let selected_server: Server | undefined;
</script>

{#if selected_server != undefined}
    <NewGameView bind:page bind:games={selected_server.games} />
{:else}
    <ErrorMessage message={"Aucun serveur n'est sélectionné sur la page New_Game"} />
{/if}
