<script lang="ts">
    import type { Game } from "../Game/Class";
    import type { Server } from "./Class";

    export let page: string;
    export let view: Server | undefined;
    export let server: Server;
    export let selected_game: Game | undefined;
</script>

<button
    on:click={() => {
        view = undefined;
        page = "Menu";
    }}
>
    Choisir un autre serveur
</button>

<br />
<br />

{server.name}

<br />
<br />

<button
    on:click={() => {
        page = "New_Game";
    }}
>
    Ajouter un équipage
</button>

<br />
<br />

{#each server.games as game}
    <button
        on:click={() => {
            selected_game = game;
            page = "Ship";
        }}
    >
        {game.ship.name}
    </button>

    <br />
{/each}
