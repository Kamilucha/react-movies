import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Movies from "pages/Movies";
// import Home from "pages/Home";
// import MovieDetails from "pages/MovieDetails";
import Layout from "./Layout/Layout";
import Cast from "./Cast/Cast";
import Rewievs from "./Reviews/Reviews";


const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))

export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Rewievs/>}/>
        </Route>
      </Route>
      </Routes>
  );
};
