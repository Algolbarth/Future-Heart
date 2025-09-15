<script lang="ts">
    import type { Server } from "../Server/Class";
    import type { Game } from "../Game/Class";
    import type { Planet } from "../Planet/Class";
    import type { Region } from "../Region/Class";
    import type { Zone } from "../Zone/Class";

    import ErrorMessage from "./ErrorMessage.svelte";
    import MenuRoot from "../Menu/Root.svelte";
    import NewServerRoot from "../Server/New/Root.svelte";
    import ServerRoot from "../Server/Root.svelte";
    import NewGameRoot from "../Game/New/Root.svelte";
    import ShipRoot from "../Ship/Root.svelte";
    import CrewRoot from "../Character/Crew/Root.svelte";
    import SolarSystemRoot from "../SolarSystem/Root.svelte";
    import PlanetRoot from "../Planet/Root.svelte";
    import RegionRoot from "../Region/Root.svelte";
    import ZoneRoot from "../Zone/Root.svelte";

    export let page: string;
    export let servers: Server[];
    export let selected_server: Server | undefined;
    export let selected_game: Game | undefined;
    export let selected_planet: Planet | undefined;
    export let selected_region: Region | undefined;
    export let selected_zone: Zone | undefined;
</script>

{#if page == "Menu"}
    <MenuRoot bind:page bind:servers bind:selected_server />
{:else if page == "New_Server"}
    <NewServerRoot bind:page bind:servers />
{:else if page == "Server"}
    <ServerRoot bind:page bind:selected_server bind:selected_game />
{:else if page == "New_Game"}
    <NewGameRoot bind:page bind:selected_server />
{:else if page == "Ship"}
    <ShipRoot bind:page bind:selected_game />
{:else if page == "Crew"}
    <CrewRoot bind:page bind:selected_game />
{:else if page == "Solar_System"}
    <SolarSystemRoot bind:page bind:selected_game bind:selected_planet />
{:else if page == "Planet"}
    <PlanetRoot bind:page bind:selected_game bind:selected_planet bind:selected_region />
{:else if page == "Region"}
    <RegionRoot bind:page bind:selected_planet bind:selected_region bind:selected_zone />
{:else if page == "Zone"}
    <ZoneRoot bind:page bind:selected_zone />
{:else}
    <ErrorMessage message={"La page " + page + " n'est pas reconnue."} />
{/if}
