<script lang="ts">
    import type { Server } from "./Class";
    import type { Game } from "../Game/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import ServerView from "../Server/View.svelte";

    export let page: string;
    export let selected_server: Server | undefined;
    export let selected_game: Game | undefined;
</script>

{#if selected_server != undefined}
    <ServerView bind:page bind:view={selected_server} bind:server={selected_server} bind:selected_game />
{:else}
    <ErrorMessage message={"Aucun serveur n'est sélectionné sur la page Server"} />
{/if}
