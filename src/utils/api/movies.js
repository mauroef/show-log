import { API } from '@/utils/constants';
import { handleResponse, handleFetchError } from '@/utils/helpers';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API.AUTH_KEY}`,
  },
};

export const getMostVotedMovies = async () => {
  const queryParams =
    '?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc';

  try {
    const response = await fetch(
      `${API.BASE_URL}discover/movie${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data.results);
  } catch (error) {
    return handleFetchError(error, 'most voted movies', []);
  }
};

export const getMovieById = async (id) => {
  const queryParams = '?language=en-US';

  try {
    const response = await fetch(
      `${API.BASE_URL}movie/${id}${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data);
  } catch (error) {
    return handleFetchError(error, `movie details id: ${id}`, null);
  }
};

export const getMovieVideoById = async (id) => {
  try {
    const response = await fetch(`${API.BASE_URL}movie/${id}/videos`, OPTIONS);

    return await handleResponse(response).then((data) => data.results[0]);
  } catch (error) {
    return handleFetchError(error, `movie video id: ${id}`, null);
  }
};

export const getPopularMovies = async () => {
  const queryParams = '?language=en-US&page=1';

  try {
    const response = await fetch(
      `${API.BASE_URL}movie/popular${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data.results);
  } catch (error) {
    return handleFetchError(error, 'popular movies', []);
  }
};
