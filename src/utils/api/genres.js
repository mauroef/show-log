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
    if (!response.ok) throw new Error('Failed to fetch movie genres');
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Error fetching movie genres:', error);
    return [];
  }
};

export const getShowGenres = async () => {
  const queryParams = '?language=en';

  try {
    const response = await fetch(
      `${API.BASE_URL}genre/tv/list${queryParams}`,
      OPTIONS
    );

    if (!response.ok) throw new Error('Failed to fetch tv show genres');

    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Error fetching tv show genres:', error);
    return [];
  }
};
