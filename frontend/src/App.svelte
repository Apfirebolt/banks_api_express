<script>
  import { Router, Link, Route } from "svelte-routing";
  import Banks from "./routes/Banks.svelte";
  import Home from "./routes/Home.svelte";
  import Store from "./routes/Store.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
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
      <Route path="/store" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
  <Footer />
</main>

<style>
  
</style>
