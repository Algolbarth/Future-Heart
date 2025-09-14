<script lang="ts">
    import type { Zone } from "./Class";

    export let page: string;
    export let view: Zone | undefined;
    export let zone: Zone;
</script>

{zone.name}

<br />
<br />

<button
    on:click={() => {
        view = undefined;
        page = "Ship";
    }}
>
    Retourner au vaisseau
</button>
