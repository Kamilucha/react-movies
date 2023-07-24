import { Link } from "react-router-dom";

export const MoviesByQuery = ({ movies }) => {

     if (!movies || movies.length === 0) {
    return <p>Start searching for movies</p>;
  }
    return (
        <div>
            <ul>
              {movies.map((movie) => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  </li>
              ))}
            </ul>
        </div>
    )
}