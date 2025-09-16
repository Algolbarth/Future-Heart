<script lang="ts">
    import type { Item } from "./Class";

    import ItemView from "./View.svelte";

    export let item: Item;
</script>

<ItemView bind:view={item} bind:item />
