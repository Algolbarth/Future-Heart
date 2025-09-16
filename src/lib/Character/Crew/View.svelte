<script lang="ts">
    import type { Game } from "../../Game/Class";
    import { Character } from "../Class";

    import CharacterRoot from "../Root.svelte";

    export let page: string;
    export let game: Game;

    let selected_character: Character | undefined;
</script>

<button
    on:click={() => {
        page = "Ship";
    }}
>
    Retour
</button>

<br />
<br />

{#each game.crew as character}
    <button
        on:click={() => {
            selected_character = character;
        }}
    >
        {character.name}
    </button>

    <br />
{/each}

{#if selected_character != undefined}
    <div class="window">
        <CharacterRoot bind:selected_character />
    </div>
{/if}
