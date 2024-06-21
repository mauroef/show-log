import { API } from '@/utils/constants';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API.AUTH_KEY}`,
  },
};

export const getShowById = async (id) => {
  const queryParams = '?language=en-US';
  try {
    const response = await fetch(
      `${API.BASE_URL}tv/${id}${queryParams}`,
      OPTIONS
    );

    if (!response.ok) throw new Error('Failed to fetch show');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching show:', error);
    return null;
  }
};

export const getMostVotedShows = async () => {
  const queryParams =
    '?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.desc';

  try {
    const response = await fetch(
      `${API.BASE_URL}discover/tv${queryParams}`,
      OPTIONS
    );

    if (!response.ok) throw new Error('Failed to fetch most voted tv shows');

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching most voted tv shows:', error);
    return [];
  }
};
