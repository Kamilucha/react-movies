import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI()

const Rewievs = () => {

const { movieId } = useParams();
const [reviews, setReviews] = useState([]);
    
 
useEffect(() => {
    const getReviewsById = async () => {
      try {
        const resp = await movieAPI.ReviewsById(movieId);
        console.log(resp);
        if (resp.results.length === 0) {
          setReviews([]);
        } else {
          setReviews(resp.results);
        }
      } catch (error) {
        console.log("Error searching movies:", error);
      }
    };

    getReviewsById();
}, [movieId]);
            

    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>{ review.content}</p>
                </li>
            ))}
        </ul>
    )
}

export default Rewievs