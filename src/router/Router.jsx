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
import PrivateRouter from "./PrivateRouter";
import Profile from "../components/pages/Profile";
import BookMarkRecipes from "../components/pages/BookMarkRecipes";

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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "allchef",
        element: <AllChef />,
      },
      {
        path: "v1/chefdetails/:id",
        element: (
          <PrivateRouter>
            <ChefDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-mehedi-hasan-mehedihasan95.vercel.app/v1/chefdetails/${params.id}`
          ),
      },
      {
        path: "favorite-recipes",
        element: <BookMarkRecipes />,
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
