import { 
  createBrowserRouter,
} from "react-router-dom";
import Root from "../pages/root/root"


export enum ROUTER_LIST {
  root = "/"
}

const router = createBrowserRouter([
  {
    path: ROUTER_LIST.root,
    element: <Root />
  },
]);

export default router