<script>
  import { Router, Route } from "svelte-routing";
  import Layout from "./routes/Layout.svelte";
  import Banks from "./routes/Banks.svelte";
  import BankDetail from "./routes/BankDetail.svelte";
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
      <Route path="/banks/:id" component={BankDetail} />
      <Route path="/store" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Layout>
  </Router>
</main>
