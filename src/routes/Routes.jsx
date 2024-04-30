import Root from "../Layout/Root";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/Home/Home";
import MovieDetails from "../components/MovieDetails/MovieDetails";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: ":id",
            element: <MovieDetails/>
        }
      ]
    },
  ]);
