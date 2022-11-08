import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>H</div>,
  },
  {
    path: "/teste",
    element: <div>Teste</div>,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
