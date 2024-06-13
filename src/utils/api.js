import { BASE_URL_API } from './constants';

const AUTH_KEY = process.env.TMDB_AUTH_KEY;
const API_KEY = process.env.TMDB_API_KEY;
const QUERY_PARAMS = 'language=en-US&page=1';

export const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  try {
    const response = await fetch(`${BASE_URL_API}movie/popular?${QUERY_PARAMS}`, options);

    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);

    return [];
  }
};
