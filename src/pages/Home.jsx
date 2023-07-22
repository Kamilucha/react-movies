// import { fetchMovie } from "services/fetchAPI"
import { useState, useEffect } from "react"

import { AllMoviesList } from "components/AllMoviesList";
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       fetchTrendsMovies();
    }, [])
    
    const fetchTrendsMovies = async () => {
        try {
            const data = await movieAPI.fetchTrendsMovies();
            setMovies(data.results)
            console.log(data.results)
        } catch (error) {
            console.log("Error fetching movies:", error);
        }
    } 

    return (
        <div>
            <h1>Tranding today</h1>
            <AllMoviesList movies={movies}/>
        </div>
        // <ul>
        //     {movies.map((movie) => (
        //         <li key={movie.id}>
        //             <Link to="">{movie.title}</Link>
        //         </li>
        //     ))}
        // </ul>
    )
}