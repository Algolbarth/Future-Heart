<script lang="ts">
    import { Game } from "../Class";

    export let page: string;
    export let games: Game[];

    let ship_name: string = "";
    let character_name: string = "";
</script>

<button
    on:click={() => {
        page = "Server";
    }}
>
    Retour
</button>

<br />
<br />

<input type="text" bind:value={ship_name} placeholder="Nom du vaisseau" />

<br />
<br />

<input type="text" bind:value={character_name} placeholder="Nom du personnage" />

<br />
<br />

{#if ship_name.length > 0 && character_name.length > 0}
    <button
        on:click={() => {
            games.push(new Game(ship_name, character_name));
            page = "Server";
        }}
    >
        Terminer
    </button>
{:else}
    Terminer
{/if}
