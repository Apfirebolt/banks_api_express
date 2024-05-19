<script>
  import { fade } from "svelte/transition";
</script>

<h1 class="text-4xl text-center my-5">This is the About Layout</h1>
<main transition:fade>
  <slot />
</main>
