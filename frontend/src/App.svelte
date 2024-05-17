<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Banks from "./routes/Banks.svelte";
  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/banks">Banks</Link>
    </nav>
    <div>
      <Route path="/banks" component={Banks} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
</main>

<style>
  
</style>
