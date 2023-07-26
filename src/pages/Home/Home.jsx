import { useState, useEffect } from "react"
import {  useLocation  } from "react-router-dom";

import { AllMoviesList } from "components/AllMoviesList/AllMoviesList";
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI()

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    console.log(location)

    useEffect(() => {
       fetchTrendsMovies();
    }, [])
    
    const fetchTrendsMovies = async () => {
        try {
            const data = await movieAPI.fetchTrendsMovies();
            setMovies(data.results)
        } catch (error) {
            console.log("Error fetching movies:", error);
        }
    } 

    return (
        <div>
            <h1>Tranding today</h1>
            <AllMoviesList movies={movies} state={{from: location}}/>
        </div>
    )
}

export default Home