import { SearchBox } from "components/SearchBox/SearchBox"
import MovieAPI from "services/fetchAPI";
import { useSearchParams, useLocation  } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoviesByQuery } from "components/MoviesByQuery/MoviesByQuery";

const movieAPI = new MovieAPI()

 const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("title") ?? "";
   const [movies, setMovies] = useState([]);
    const location = useLocation()
    console.log(location)

    useEffect(() => {

      const searchMovies = async () => {
        try {
          if (movieName.trim() !== "") {
            const data = await movieAPI.movieByQuery(movieName);
            setMovies(data.results);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.log("Error searching movies:", error);
        }
      };
        searchMovies();
        
    }, [movieName]);

    
    const updateQueryString = (value) => {

      const nextParams = value !== "" ? { title: value } : {};
        
      setSearchParams(nextParams);
    };

    
    return (
        <main>
            <SearchBox value={movieName} onChange={updateQueryString} />
        <MoviesByQuery movies={movies} state={ {from: location} } />
        </main>
    )
 }

 export default Movies