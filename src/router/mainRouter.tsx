import EconomicDataChart from "@/page/EconomicDataChart";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <EconomicDataChart />,
      },
    ],
  },
]);
