<script>
  import { onMount } from "svelte";
  import { count, increment, decrement, getBanks } from '../store/bank.js';
</script>

<footer>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
    <div
      class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"
    >
      <span class="block sm:inline">&copy; 2024 Banks API Inc.</span>
      <span class="block sm:inline">All rights reserved.</span>
      <span class="block sm:inline">Built with SvelteKit</span>
      <span class="block sm:inline">| {$count}</span>
      <button on:click={increment} class="bg-green-700 text-white p-2 my-3">
        Increment
      </button>
      <button on:click={decrement} class="bg-green-700 text-white p-2 my-3">
        Decrement
      </button>
      <!-- print all banks in loop -->
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
  }
</style>
