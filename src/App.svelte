<script lang="ts">
    import Root from "./lib/System/Root.svelte";
    import { Server } from "./lib/Server/Class";
    import type { Game } from "./lib/Game/Class";
    import type { Planet } from "./lib/Planet/Class";
    import type { Region } from "./lib/Region/Class";
    import type { Zone } from "./lib/Zone/Class";

    let page: string = "Menu";

    let servers: Server[] = [];

    let selected_server: Server | undefined = undefined;

    let selected_game: Game | undefined;

    let selected_planet: Planet | undefined;
    let selected_region: Region | undefined;
    let selected_zone: Zone | undefined;
</script>

<div class="window">
    <Root bind:page bind:servers bind:selected_server bind:selected_game bind:selected_planet bind:selected_region bind:selected_zone />
</div>
