import { RouteDefinition } from "@solidjs/router";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notfound/notfound";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
