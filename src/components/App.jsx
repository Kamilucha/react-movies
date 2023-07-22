import { Routes, NavLink, Route } from "react-router-dom";
import { Movies } from "pages/Movies";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<Movies />} />
      </Routes>
    </div>
  );
};
