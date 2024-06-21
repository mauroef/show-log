import { handleResponse, handleFetchError } from '@/utils/helpers';
import { API } from '@/utils/constants';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API.AUTH_KEY}`,
  },
};

export const getMovieGenres = async () => {
  const queryParams = '?language=en';

  try {
    const response = await fetch(
      `${API.BASE_URL}genre/movie/list${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data.genres);
  } catch (error) {
    return handleFetchError(error, 'movie genres', []);
  }
};

export const getShowGenres = async () => {
  const queryParams = '?language=en';

  try {
    const response = await fetch(
      `${API.BASE_URL}genre/tv/list${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data.genres);
  } catch (error) {
    return handleFetchError(error, 'show genres', []);
  }
};
