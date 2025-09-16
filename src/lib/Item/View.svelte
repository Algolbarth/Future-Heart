<script lang="ts">
    import type { Item } from "./Class";

    export let view: Item | undefined;
    export let item: Item;
</script>

<button
    on:click={() => {
        view = undefined;
    }}
>
    Fermer
</button>

<br />
<br />

{item.name}
{#if item.max_stack > 1}
    x {item.stack}
{/if}
