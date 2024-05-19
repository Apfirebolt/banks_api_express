<script>
  import { Router, Route } from "svelte-routing";
  import { fade } from "svelte/transition";
  import Layout from "./routes/Layout.svelte";
  import AboutLayout from "./routes/AboutLayout.svelte";
  import Banks from "./routes/Banks.svelte";
  import Home from "./routes/Home.svelte";
  import Store from "./routes/Store.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
  

  export let url = "";
</script>

<main>
  <Router {url}>
    <Layout>
      <Route path="/banks" component={Banks} />
      <Route path="/store" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Layout>
    <AboutLayout>
      <Route path="/" component={Home} />
    </AboutLayout>
  </Router>
</main>
