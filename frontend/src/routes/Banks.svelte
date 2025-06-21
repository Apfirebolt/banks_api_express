<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import httpClient from "../plugins/interceptor";

  let banks = [];
  let currentPage = 1;
  let pageWindow = [];
  let lastPage = 100;
  let search = "";

  onMount(async () => {
    try {
      const response = await httpClient.get("banks");
      banks = response.data.banks;
      lastPage = response.data.pages;

      // create a window of 10 pages, first 4 pages, ... and last 4 pages
      if (lastPage <= 10) {
        pageWindow = Array.from({ length: lastPage }, (_, i) => i + 1);
      } else {
        pageWindow = [
          1,
          2,
          3,
          4,
          "...",
          lastPage - 3,
          lastPage - 2,
          lastPage - 1,
          lastPage,
        ];
      }
    } catch (error) {
      console.error(error);
    }
  });

  const searchBanks = async () => {
    const response = await httpClient.get(`banks?keyword=${search}`);
    if (response) {
      banks = response.data.banks;
      lastPage = response.data.pages;
      // update page window
      if (lastPage <= 10) {
        pageWindow = Array.from({ length: lastPage }, (_, i) => i + 1);
      } else {
        pageWindow = [
          1,
          2,
          3,
          4,
          "...",
          lastPage - 3,
          lastPage - 2,
          lastPage - 1,
          lastPage,
        ];
      }
    }
  };

  const goToPage = async (page) => {
    // set the value of the current page
    currentPage = page;
    const response = await httpClient.get(
      `banks?page=${page}&keyword=${search}`
    );

    if (response) {
      banks = response.data.banks;
      lastPage = response.data.pages;

      // update the page window, first 4 pages should be currentPage - 1, currentPage, currentPage + 1, currentPage + 2
      if (lastPage <= 10) {
        pageWindow = Array.from({ length: lastPage }, (_, i) => i + 1);
      } else if (currentPage <= 5) {
        pageWindow = [
          1,
          2,
          3,
          4,
          "...",
          lastPage - 3,
          lastPage - 2,
          lastPage - 1,
          lastPage,
        ];
      } else if (currentPage >= lastPage - 4) {
        pageWindow = [
          1,
          2,
          3,
          4,
          "...",
          lastPage - 3,
          lastPage - 2,
          lastPage - 1,
          lastPage,
        ];
      } else {
        pageWindow = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          "...",
          lastPage,
        ];
      }
    }
  };
</script>

<div>
  <!-- Add your component markup here -->
  <h2 class="text-gray-800 text-center my-3 text-3xl font-bold">Banks</h2>
  <div class="container mx-auto flex justify-between items-center my-5">
    <p class="text-center text-cyan-700 font-semibold text-lg">
      List of banks in India
    </p>

    <div class="w-1/2">
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          id="search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for banks based on name, city"
          bind:value={search}
          required
        />
        <button
          on:click={() => searchBanks()}
          class="text-white absolute end-2.5 bottom-2.5 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Search</button
        >
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 container mx-auto">
    {#each banks as bank}
      <div
        class="block rounded-lg bg-neutral-100 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
      >
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight">
            {bank.name}
          </h5>
          <p class="mb-4 text-base">
            {bank.address}
          </p>
        </div>
        <div
          class="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300"
        >
          {bank.city}, {bank.state}
          {bank.contact}

          <Link to={`/banks/${bank._id}`} class="text-cyan-700 hover:text-cyan-800 underline">
            View Details
          </Link>
        </div>
      </div>
    {/each}
  </div>

  <div class="container mx-auto my-3 flex">
    <div class="join">
      <!--first 4 pages -->
      {#each pageWindow as page}
        <button
          class="join-item btn"
          class:btn-primary={currentPage === page}
          on:click={() => goToPage(page)}
          disabled={page === "..." || currentPage === page}
        >
          {page}
        </button>
      {/each}
    </div>
    <!-- Input box to go to any page -->
    <div class="mx-4">
      <label for="page" class="join-item text-cyan-700 font-semibold"
        >Go to page</label
      >
      <input
        type="number"
        class="shadow appearance-none border border-cyan-700 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        min="1"
        max={lastPage}
        bind:value={currentPage}
        on:change={() => goToPage(currentPage)}
      />
    </div>
  </div>
</div>

<style>
  /* Add your component styles here */
</style>
