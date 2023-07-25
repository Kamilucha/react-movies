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
        console.log(resp.cast)
      } catch (error) {
        console.log("Error searching movies:", error);
      }
    };

    getCastById();
        
     }, [movieId])
    

    return  <div>
    <h2>Cast:</h2>
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img src={
                 `https://image.tmdb.org/t/p/w200/${profile_path}`
              }
              alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
          
          </li>
      ))}
    </ul>
  </div>
}

export default Cast