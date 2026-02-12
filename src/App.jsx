import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* Layouts */
import PublicLayout from "./layouts/PublicLayout";

/* Pages */
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import AlbumsPage from "./pages/AlbumsPage";

function App() {
  const routes = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <UsersPage />,
        },
        {
          path: "/posts",
          element: <PostsPage />,
        },
        {
          path: "/albums",
          element: <AlbumsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
