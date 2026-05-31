import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/Landing";
import SelectFrame from "../pages/SelectFrame";
import Camera from "../pages/Camera";
import Preview from "../pages/Preview";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/select-frame",
    element: <SelectFrame />,
  },
  {
    path: "/camera",
    element: <Camera />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
