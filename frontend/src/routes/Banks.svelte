<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let banks = [];
  let currentPage = 1;
  let lastPage = 100;

  onMount(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/banks");
      banks = response.data.banks;
      lastPage = response.data.pages;
    } catch (error) {
      console.error(error);
    }
  });

  const goToPage = async (page) => {
    // set the value of the current page
    currentPage = page;
    const response = await axios.get(`http://localhost:3000/api/banks?page=${page}`);
    
    if (response) {
      banks = response.data.banks;
      lastPage = response.data.pages;
    }
  }
</script>

<div>
  <!-- Add your component markup here -->
  <h2 class="bg-slate-300 text-gray-800 text-center py-3">Banks Page - {currentPage}</h2>
  {#each banks as bank}
    <div class="container mx-auto bg-cyan-700 px-2 py-4 text-white">
      <h3>{bank.name}</h3>
      <p>{bank.address}</p>
      <p>
        {bank.city}, {bank.state} {bank.contact}
      </p>
    </div>
  {/each}

  <div class="container mx-auto my-3">
    <div class="join">
      <!--first 4 pages -->
      {#each Array.from({ length: 5 }, (_, i) => currentPage + i).filter(page => page <= lastPage) as page}
        <button
            class="join-item btn"
            class:btn-primary={currentPage === page}
            on:click={() => goToPage(page)}
          >
          {page}
        </button>
      {/each}
      <button class="join-item btn btn-disabled">...</button>
      
      <!-- run a loop lastPage - 5 to lastPage -->
      {#each Array.from({ length: 5 }, (_, i) => lastPage - i).filter(page => page > 5) as page}
        <button
            class="join-item btn"
            class:btn-primary={currentPage === page}
            on:click={() => goToPage(page)}
          >
          {page}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Add your component styles here */
</style>
