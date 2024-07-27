import { API } from '@/utils/constants';
import { handleResponse, handleFetchError } from '@/utils/helpers';

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API.AUTH_KEY}`,
  },
};

export const getMultiSearchResults = async (searchPhrase = '') => {
  const queryParams = `?query=${searchPhrase}&language=en-US&page=1`;

  try {
    const response = await fetch(
      `${API.BASE_URL}search/multi${queryParams}`,
      OPTIONS
    );

    return await handleResponse(response).then((data) => data.results);
  } catch (error) {
    return handleFetchError(error, 'multi search results', []);
  }
};
