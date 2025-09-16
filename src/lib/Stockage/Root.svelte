<script lang="ts">
    import type { Stockage } from "./Class";

    import StockageView from "./View.svelte";

    export let stockage: Stockage;
</script>

<StockageView bind:view={stockage} bind:stockage />
