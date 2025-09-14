<script lang="ts">
    import { Game } from "../Class";

    export let page: string;
    export let games: Game[];

    let game_name: string = "";
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

<input type="text" bind:value={game_name} placeholder="Nom de l'équipage" />

<br />
<br />

{#if game_name.length > 0}
    <button
        on:click={() => {
            games.push(new Game(game_name));
            page = "Server";
        }}
    >
        Terminer
    </button>
{:else}
    Terminer
{/if}
