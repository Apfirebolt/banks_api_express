<script>
  import { fade } from "svelte/transition";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Header />

<main transition:fade>
  <slot />
</main>

<Footer />
