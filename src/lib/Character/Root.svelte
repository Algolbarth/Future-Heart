<script lang="ts">
    import type { Character } from "./Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import CharacterView from "./View.svelte";

    export let selected_character: Character | undefined;
</script>

{#if selected_character != undefined}
    <CharacterView bind:view={selected_character} bind:character={selected_character} />
{:else}
    <ErrorMessage message={"Aucun personage n'est sélectionné sur la page Character"} />
{/if}
