import slugify from 'slugify';

export const slug = (text) => slugify(text, { lower: true, strict: true });

export const extractIdFromSlug = (slug) => {
  const parts = slug.split('-');

  return parts[parts.length - 1];
};

export const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.status_message || 'An error occurred');
  }
  return response.json();
};

export const handleFetchError = (error, context, fallback = null) => {
  console.error(`Error fetching ${context}:`, error);

  return fallback;
};
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  return formatter.format(date);
};
