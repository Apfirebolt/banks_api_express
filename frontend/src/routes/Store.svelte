<script>
  import { onMount } from "svelte";
  import { getBankData, banks } from "../store/bank"

  let currentPage = 1;
  let pageWindow = [];
  let lastPage = 100;
  let search = "";

  onMount(async () => {
    try {
      await getBankData();
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div>
  <!-- Add your component markup here -->
  <h2 class="text-gray-800 text-center my-3 text-3xl font-bold">Banks Store</h2>
  <div class="container mx-auto flex justify-between items-center my-5">
    <p class="text-center text-cyan-700 font-semibold text-lg">
      List of banks in India
    </p>
  </div>
  <!-- print all banks -->
    <div class="container mx-auto">
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
</div>

<style>
  /* Add your component styles here */
</style>
