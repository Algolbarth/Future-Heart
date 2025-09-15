<script lang="ts">
    import type { Character } from "./Class";

    export let view: Character | undefined;
    export let character: Character;
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
