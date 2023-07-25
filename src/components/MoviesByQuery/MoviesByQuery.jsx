import { Link, useLocation } from "react-router-dom";



export const MoviesByQuery = ({ movies }) => {
      const location = useLocation()
    console.log(location)

     if (!movies || movies.length === 0) {
    return <p>Start searching for movies</p>;
  }
    return (
        <div>
            <ul>
              {movies.map(({id, title}) => (
                  <li key={id}>
                      <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                  </li>
              ))}
            </ul>
        </div>
    )
}