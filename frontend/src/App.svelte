<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Banks from "./routes/Banks.svelte";
  import Home from "./routes/Home.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <Header />
    <div>
      <Route path="/banks" component={Banks} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
  <Footer />
</main>

<style>
  
</style>
