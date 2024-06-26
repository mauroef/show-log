const API = {
  AUTH_KEY: process.env.TMDB_AUTH_KEY,
  BASE_URL: 'https://api.themoviedb.org/3/',
};

const IMAGE_URLS = {
  BASE_TEASER: 'https://image.tmdb.org/t/p/w250_and_h141_face',
  BASE_LEAD: 'https://image.tmdb.org/t/p/w1280',
};

const MEDIA_TYPE = {
  MOVIE: 'movie',
  SHOW: 'show',
};

const PROJECT_NAME = 'ShowLog';

const SHELF = {
  SCROLL_AMOUNT: 200,
};

const SLIDER = {
  SWITCH_TO_VIDEO_DURATION: 5000,
};

const VIDEO_URLS = {
  YOUTUBE: 'https://www.youtube.com/watch?v=',
};

export { API, IMAGE_URLS, MEDIA_TYPE, PROJECT_NAME, SHELF, SLIDER, VIDEO_URLS };
