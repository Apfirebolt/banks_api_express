<script>
  import { onMount } from "svelte";
import axios from "axios";

  let banks = [];

  onMount(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/banks");
      banks = response.data.banks;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div>
  <!-- Add your component markup here -->
  <h2>
    Banks Page
  </h2>
  {#each banks as bank}
    <div>{bank.name}</div>
  {/each}
</div>

<style>
  /* Add your component styles here */
</style>
