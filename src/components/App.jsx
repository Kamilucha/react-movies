import { Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Layout from "./Layout";
import Cast from "./Cast";
import Rewievs from "./Reviews";

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
