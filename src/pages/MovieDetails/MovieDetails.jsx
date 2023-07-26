import MovieAPI from "services/fetchAPI";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react"
import MovieInfo from "components/MovieInfo/MovieInfo";

const movieAPI = new MovieAPI()

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backBtn = location.state?.from ?? '/'


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
                 <Link to={backBtn} >Back to movies</Link>
        <MovieInfo movie={movie}  />
        <ul>
            <li>
              <Link to='cast' state={{ from: backBtn }}>Cast</Link>
            </li>
            <li>
                <Link to='reviews' state={{ from: backBtn }}>Rewievs</Link>  
            </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
        </Suspense>
    </>

}

export default MovieDetails
