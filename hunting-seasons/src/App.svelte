<script lang="ts">
import { onMount } from 'svelte';
import { format } from 'date-fns';
import { getActiveSeasons, type Species } from './lib/huntingSeasons';

let selectedDate = new Date();
let activeSeasons: Species[] = [];

function updateActiveSeasons() {
  activeSeasons = getActiveSeasons(selectedDate);
}

onMount(() => {
  updateActiveSeasons();
});
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-4">Hunting Seasons Checker</h1>
  
  <div class="mb-4">
    <label for="date-picker" class="block text-sm font-medium text-gray-700">Select Date</label>
    <input
      id="date-picker"
      type="date"
      bind:value={selectedDate}
      on:change={updateActiveSeasons}
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>

  <h2 class="text-xl font-semibold mb-2">Active Hunting Seasons for {format(selectedDate, 'MMMM d, yyyy')}</h2>

  {#if activeSeasons.length === 0}
    <p>No active hunting seasons for this date.</p>
  {:else}
    <ul class="space-y-4">
      {#each activeSeasons as species}
        <li class="bg-white shadow rounded-lg p-4">
          <h3 class="text-lg font-medium">{species.name}</h3>
          <ul class="mt-2 space-y-1">
            {#each species.seasons as season}
              <li class="text-sm text-gray-600">{season.type}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  {/if}
</main>