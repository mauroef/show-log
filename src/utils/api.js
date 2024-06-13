import { API } from './constants';

const AUTH_KEY = process.env.TMDB_AUTH_KEY;

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`,
  },
};

export const getMostVotedMovies = async () => {
  const queryParams = 'include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc';

  try {
    const response = await fetch(`${API.BASE_URL}discover/movie?${queryParams}`, OPTIONS);

    if (!response.ok) {
      throw new Error('Failed to fetch most voted movies');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching most voted movies:', error);

    return [];
  }
};

export const getMovieVideoById = async (movieId) => {
  try {
    const response = await fetch(`${API.BASE_URL}movie/${movieId}/videos`, OPTIONS);

    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }

    const data = await response.json();

    return data.results[0];
  } catch (error) {
    console.error('Error fetching popular movies:', error);

    return null;
  }
}

export const getPopularMovies = async () => {
  const queryParams = 'language=en-US&page=1';

  try {
    const response = await fetch(`${API.BASE_URL}movie/popular?${queryParams}`, OPTIONS);

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
