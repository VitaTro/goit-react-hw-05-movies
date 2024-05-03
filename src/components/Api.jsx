import axios from 'axios';

const APIKEY = 'e41d1e074713eb19259eb796492b59d1';

const Api = () => {
  // повернення популярних фільмів
  fetchTrendingMovies : async () => {
    const target = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
    const response = await axios.get(target);
      // цей вираз повертає частину даних, а саме результати пошуку.
    // корисний, коли я шукаю фільм за запитом
    // в даному випадку цей вираз повертає популярні фільми
    return response.data.results;
  },

  // повернення фільмів за пошуком
  fetchSearchQuery : async (query) => {
    const target = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}&include_adult=false&language=en-US&page=1`;
    const response = await axios.get(target);
    // цей вираз повертає частину даних, а саме результати пошуку.
    // корисний, коли я шукаю фільм за запитом
    return response.data.results;
  },

  //   повернення деталей про вибраний фільм
 fetchDetailsMovie : async (id) => {
    const target = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
    const response = await axios.get(target);
    // вираз повертає ВСІ дані, які я отримала з API.
    // корисно, коли треба отримати загальне інфо про фільм
    // (заголовок, опис, рік випуску, рейтинг ітд)
    return response.data;
  },

  // повернення груп акторів, які грали у вібраному фільмі
   fetchCastMovie: async (id) => {
    const target = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`;

    const response = await axios.get(target);
    // цей вираз повертає ЛИШЕ частину даних,
    // в даному випадку тільки групу акторів, які грали у
    // вибраному фільмі
    return response.data.cast;
  },

  //   повернення рецензії вибраного фільму
  fetchReviewsMovie : async (review_id) => {
    const target = `https://api.themoviedb.org/3/review/${review_id}?api_key=${APIKEY}`;
    const response = await axios.get(target);
     // вираз повертає ВСІ дані, які я отримала з API.
    // корисно, коли треба отримати загальне інфо про фільм
    // (заголовок, опис, рік випуску, рейтинг ітд)
    return response.data;
  },
};

export default Api;
