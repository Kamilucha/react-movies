import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI()

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);


    useEffect(() => {
         const getCastById = async () => {
      try {
        const resp = await movieAPI.CastById(movieId);
        setCast(resp.cast);
      } catch (error) {
        console.log("Error searching movies:", error);
      }
    };

    getCastById();
        
     }, [movieId])
    
    //   const getCastById = async () =>{
    //     try {
    //         const resp = await movieAPI.CastById(movieId);
    //         console.log(resp)
    //         if (resp.cast.length === 0) {
    //             return "lialialia"
    //         }
    //         setMovieCast(resp.cast);
    //     } catch (error) {
    //         console.log("Error searching movies:", error);
    //     }
    // }

    return  <div>
    <h2>Cast:</h2>
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  </div>
}

export default Cast