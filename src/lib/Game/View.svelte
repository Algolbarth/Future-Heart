<script lang="ts">
    import type { Game } from "./Class";
    import Taskbar from "./Taskbar.svelte";

    export let game: Game;
</script>

<Taskbar bind:game />