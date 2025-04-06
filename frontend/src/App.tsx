import { Router } from "@solidjs/router";
import "./App.css";
import routes from "./routes";
import { onMount } from "solid-js";
import { initFlowbite } from "flowbite";

function App() {
  onMount(() => {
    initFlowbite();
  });

  return (
    <>
      <div class="h-[40px] py-2 bg-zinc-200">navbar</div>
      <Router>{routes}</Router>
      <div class="h-[40px] py-2 bg-zinc-200">footer</div>
    </>
  );
}

export default App;
