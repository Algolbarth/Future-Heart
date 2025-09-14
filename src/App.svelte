<script lang="ts">
    import Root from "./lib/System/Root.svelte";
    import { Server } from "./lib/Server/Server";
    import type { Game } from "./lib/Game/Class";
    import type { Planet } from "./lib/Planet/Class";

    let page: string = "Menu";

    let servers: Server[] = [];

    let selected_server: Server | undefined = undefined;

    let selected_game: Game | undefined;

    let selected_planet: Planet | undefined;
</script>

<Root bind:page bind:servers bind:selected_server bind:selected_game bind:selected_planet />
