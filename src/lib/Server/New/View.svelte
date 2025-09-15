<script lang="ts">
    import { Server } from "../Class";

    export let page: string;
    export let servers: Server[];

    let server_name: string = "";
</script>

<button
    on:click={() => {
        page = "Menu";
    }}
>
    Retour
</button>

<br />
<br />

<input type="text" bind:value={server_name} placeholder="Nom du serveur" />

<br />
<br />

{#if server_name.length > 0}
    <button
        on:click={() => {
            servers.push(new Server(server_name));
            page = "Menu";
        }}
    >
        Terminer
    </button>
{:else}
    Terminer
{/if}
