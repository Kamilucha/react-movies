
// export async function fetchMovie() {
//   const apiKey = '4d36de3fb8d01d2841da81446387c2b5';
//   const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error fetching movies:', error);
//   }
// }

class MovieAPI  {
  constructor() {
    this.apiKEY = '4d36de3fb8d01d2841da81446387c2b5';
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  ///метод для трендових фільмів
  
  async fetchTrendsMovies() {
    const URL = `${this.baseURL}/trending/all/day?api_key=${this.apiKEY}`

     try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movies:', error);
  }
  }

  //'https://api.themoviedb.org/3/search/movie?query=cat'
  ///метод для пошуку фільмів

  async movieByQuery(value) {
    const URL = `${this.baseURL}/search/movie?api_key=${this.apiKEY}&query=${value}`

     try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movies:', error);
  }
  }

  ///метод для книги по айді
  ///'https://api.themoviedb.org/3/movie/movie_id'

  async MovieById(id) {
    const URL = `${this.baseURL}/movie/${id}?${this.apiKEY}`

      try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
        return data;
  } catch (error) {
    console.log('Error fetching movies:', error);
  }
  }



}

export default MovieAPI;

  
    