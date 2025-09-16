<script lang="ts">
    import type { Character } from "./Class";

    import StockageRoot from "../Stockage/Root.svelte";
    import type { Stockage } from "../Stockage/Class";

    export let view: Character | undefined;
    export let character: Character;

    let show_inventory: Stockage | undefined;
</script>

<button
    on:click={() => {
        view = undefined;
    }}
>
    Retour
</button>

<br />
<br />

{character.name}

<br />
<br />

<button
    on:click={() => {
        show_inventory = character.inventory;
    }}
>
    Inventaire
</button>

{#if show_inventory != undefined}
    <div class="window">
        <StockageRoot bind:stockage={show_inventory} />
    </div>
{/if}
