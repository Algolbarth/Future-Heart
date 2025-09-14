<script lang="ts">
    import type { Server } from "../Server/Server";

    export let page: string;
    export let servers: Server[];
    export let selected_server: Server | undefined;
</script>

<button
    on:click={() => {
        page = "New_Server";
    }}
>
    Démarrer un nouveau serveur
</button>

<br />
<br />

{#each servers as server}
    <button
        on:click={() => {
            selected_server = server;
            page = "Server";
        }}
    >
        {server.name}
    </button>

    <br />
{/each}
