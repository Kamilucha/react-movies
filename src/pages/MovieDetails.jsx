import MovieAPI from "services/fetchAPI";
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react"
import MovieInfo from "components/MovieInfo";

const movieAPI = new MovieAPI()

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
   
    // console.log('ляляля')
    // console.log({ movieId })
    // console.log(location)
    

    useEffect(() => {
            
        getMovieById(movieId);
        
    }, [movieId])

    const getMovieById = async (movieId) =>{
        try {
            const resp = await movieAPI.MovieById(movieId);
    
            setMovie(resp);
        } catch (error) {
            console.log("Error searching movies:", error);
        }
    }
    
    return <>
        <MovieInfo movie={movie} />
        <ul>
            <li>
              <Link to='cast'>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Rewievs</Link>  
            </li>
        </ul>
        <Outlet/>
    </>

}

export default MovieDetails
