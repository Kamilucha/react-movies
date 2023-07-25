import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
    if (!movie) {
        return 
    }
    // console.log(movie)
    const { vote_average, genres, poster_path, title, name, overview } = movie;

    const persentageRate = Math.round((vote_average / 10) * 100);

    const img = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
        : "";
    
    const movieGenres = genres && genres.length >= 1
        ? genres.map(genre => genre.name).join(', ')
        : 'No genres'

    return (
        <div>
            <img src={img} alt={title} />
            <h2>{title || name}</h2>
            <p>User Score: {persentageRate}%</p>
            <h3>Owerview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{ movieGenres}</p>
        </div>
    )
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo