<script lang="ts">
    import type { Server } from "../Server/Server";
    import type { Game } from "../Game/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import MenuView from "./View.svelte";

    export let page: string;
    export let servers: Server[];
    export let selected_server: Server | undefined;
</script>

{#if selected_server == undefined}
    <MenuView bind:page bind:servers bind:selected_server />
{:else}
    <ErrorMessage message={"Un serveur est sélectionné sur la page Menu"} />
{/if}
