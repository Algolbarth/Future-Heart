<script lang="ts">
    import type { Game } from "../game/class";

    export let game: Game;
</script>

<div>
    {#if game.step.size_required != undefined}
        <div>
            La formule doit faire <span>{game.step.size_required} syllabes</span>
        </div>
    {/if}

    {#if game.step.syllable_required.length > 0}
        <div>
            La formule doit contenir
            {#if game.step.syllable_required.length > 1}
                les syllabes
            {:else}
                la syllabe
            {/if}

            {#each game.step.syllable_required as syllable, index}
                {#if index > 0}
                    {#if index == game.step.syllable_required.length - 1}
                        &#xA0;et
                    {:else}
                        ,
                    {/if}
                {/if}
                <span>{syllable}</span>
            {/each}
        </div>
    {/if}
</div>

<style>
    span {
        color: var(--important);
    }
</style>
