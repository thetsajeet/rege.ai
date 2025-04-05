import { RouteDefinition } from "@solidjs/router";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export default routes;
