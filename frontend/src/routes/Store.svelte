<script>
  import { onMount } from "svelte";
  import { fade, slide, crossfade, fly } from "svelte/transition";
  import { getBankData, banks } from "../store/bank";
  import { user } from "../store/auth"

  let show = true;
  let userData = {};

  onMount(async () => {
    try {
      const unsubscribe = user.subscribe((value) => {
        userData = value;
      });
      // Do something with the current value here
      await getBankData();
      return unsubscribe();
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div transition:fade>
  <!-- Add your component markup here -->
  <h2 class="text-gray-800 text-center my-3 text-3xl font-bold">Banks Store</h2>
  <div>
    <div class="container mx-auto flex justify-between items-center my-5">
      <div>
        <p class="text-center text-cyan-700 font-semibold text-lg">
          List of banks in India
        </p>
  
        <!-- if user data is present then print email -->
        {#if userData.email}
          <p class="text-center ml-3 text-cyan-700 font-semibold text-lg">
            Hello {userData.email}
          </p>
        {/if}
      </div>

      <button
        class="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
        on:click={() => (show = !show)}
      >
        Toggle Show
      </button>
    </div>
  </div>

  <!-- print all banks -->
  {#if show}
    <div transition:fly class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- loop over bankData.banks -->
        {#each $banks as bank}
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-xl font-semibold text-gray-800">{bank.name}</h3>
            <p class="text-gray-600">{bank.city}</p>
            <p class="text-gray-600">{bank.state}</p>
            <p class="text-gray-600">{bank.district}</p>
            <p class="text-gray-600">{bank.ifsc}</p>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  
</style>