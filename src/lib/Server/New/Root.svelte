<script lang="ts">
    import type { Server } from "../Server";

    import NewServerRoot from "./View.svelte";

    export let page: string;
    export let servers: Server[];
</script>

<NewServerRoot bind:page bind:servers />
