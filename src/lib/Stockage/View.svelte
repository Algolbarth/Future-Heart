<script lang="ts">
    import type { Item } from "../Item/Class";
    import type { Stockage } from "./Class";

    import ItemRoot from "../Item/Root.svelte";

    export let view: Stockage | undefined;
    export let stockage: Stockage;

    let selected_item: Item | undefined;
</script>

<div class="container">
    <div>
        <button
            on:click={() => {
                view = undefined;
            }}
        >
            Retour
        </button>

        <br />
        <br />

        {stockage.name}

        <br />
        <br />

        <div class="table">
            {#each stockage.items as item}
                <div class="row">
                    <div style="margin-left: 8px;">
                        <button
                            on:click={() => {
                                selected_item = item;
                            }}
                        >
                            {item.name}
                        </button>
                    </div>

                    <div>
                        {#if item.max_stack > 1}
                            x {item.stack}
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div>
        {#if selected_item != undefined}
            <div class="item">
                <ItemRoot bind:item={selected_item} />
            </div>
        {/if}
    </div>
</div>

<style>
    div.container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    div.table {
        display: grid;
        border: solid;
        border-width: 1px;
        border-color: rgba(0, 255, 0, 0.87);
    }

    div.row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    div.item {
        border: solid;
        border-width: 1px;
        border-color: rgba(0, 255, 0, 0.87);
        margin: 1vh;
        padding: 1vh;
        height: 94vh;
    }
</style>
