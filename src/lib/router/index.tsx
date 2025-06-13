import type { RouteObject } from "react-router";

import Home from "@/pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;