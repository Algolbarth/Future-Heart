<script lang="ts">
    import type { Zone } from "../Zone/Class";

    import ErrorMessage from "../System/ErrorMessage.svelte";
    import ZoneView from "./View.svelte";

    export let page: string;
    export let selected_zone: Zone | undefined;
</script>

{#if selected_zone == undefined}
    <ErrorMessage message={"Aucune zone n'est sélectionnée sur la page Zone"} />
{:else}
    <ZoneView bind:page bind:view={selected_zone} bind:zone={selected_zone} />
{/if}
