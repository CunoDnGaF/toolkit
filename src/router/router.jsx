import { createBrowserRouter } from "react-router-dom";
import Wiget from "../components/Wiget";
import MainPage from "../components/MainPage/MainPage";
import FilmCard from "../components/FilmCard/FilmCard";
import Favorite from "../components/Favorite/Favorite";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Wiget />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'films/:filmId',
        element: <FilmCard />
      },
      {
        path: 'favorites',
        element: <Favorite />
      }
    ]
  }
])