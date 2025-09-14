<script lang="ts">
    import type { Server } from "../Server/Server";
    import type { Game } from "../Game/Class";

    import ErrorMessage from "./ErrorMessage.svelte";
    import MenuRoot from "../Menu/Root.svelte";
    import NewServerRoot from "../Server/New/Root.svelte";
    import ServerRoot from "../Server/Root.svelte";
    import NewGameRoot from "../Game/New/Root.svelte";
    import GameRoot from "../Game/Root.svelte";

    export let page: string;
    export let servers: Server[];
    export let selected_server: Server | undefined;
    export let selected_game: Game | undefined;
</script>

{#if page == "Menu"}
    <MenuRoot bind:page bind:servers bind:selected_server />
{:else if page == "New_Server"}
    <NewServerRoot bind:page bind:servers />
{:else if page == "Server"}
    <ServerRoot bind:page bind:selected_server bind:selected_game />
{:else if page == "New_Game"}
    <NewGameRoot bind:page bind:selected_server />
{:else if page == "Game"}
    <GameRoot bind:selected_game />
{:else}
    <ErrorMessage message={"La page " + page + " n'est pas reconnue."} />
{/if}
