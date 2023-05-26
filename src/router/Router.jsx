import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Blog from "../components/pages/Blog";
import ErrorPage from "../components/utilities/ErrorPage";
import Authentication from "../components/auth/Authentication";
import AllChef from "../components/pages/AllChef";
import ChefDetails from "../components/pages/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allchef",
        element: <AllChef />,
      },
      {
        path: "v1/chefdetails/:id",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/v1/chefdetails/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
