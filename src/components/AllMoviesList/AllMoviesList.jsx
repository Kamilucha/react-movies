import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const AllMoviesList = ({ movies}) => {
    return (
         <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
                </li>
            ))}
        </ul>
    )
}

AllMoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}