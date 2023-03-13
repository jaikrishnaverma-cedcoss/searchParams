import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Sidebar from "./Sidebar";
import { navlinks } from "./controllerData";
import NormalFilterHOC from "./filter_hoc/NormalFilterHOC";
import FilterProducts from "./pages/FilterProducts";

const Routers = () => {
// router details
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar/>,
      children: [{
        path:'/',
        element:<NormalFilterHOC Comp={FilterProducts} placeholder='Search using Normal HOC'/>
      },
        ...navlinks.map(x=>{
          return { path:x.path,element :x.comp}
        }),
        {
          path: "/*",
          element: <IndexPage/>,
        },
      ],
    },
    {
      path: "/*",
      element: <Sidebar />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};


export default Routers; 