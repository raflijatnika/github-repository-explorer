import router from "@/lib/router";
import { useRoutes } from "react-router-dom";

import "@/assets/styles/index.css";

const App = () => {
  const content = useRoutes(router);
  return content;
};

export default App;