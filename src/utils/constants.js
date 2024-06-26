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

const WATCH_PROVIDERS = {
  'Disney Plus': {
    id: 337,
    logo_path: '/97yvRBw1GzX7fXprcF80er19ot.jpg',
  },
  Netflix: {
    id: 8,
    logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
  },
  'Amazon Prime Video': {
    id: 119,
    logo_path: '/dQeAar5H991VYporEjUspolDarG.jpg',
  },
  'Star Plus': {
    id: 619,
    logo_path: '/cv5S44vHpNoGj7wby6390AyhEkH.jpg',
  },
  'Apple TV Plus': {
    id: 350,
    logo_path: '/2E03IAZsX4ZaUqM7tXlctEPMGWS.jpg',
  },
  'Paramount Plus': {
    id: 531,
    logo_path: '/h5DcR0J2EESLitnhR8xLG1QymTE.jpg',
  },
  MovistarTV: {
    id: 339,
    logo_path: '/tRNA2CRgA4XHvd7Mx9dH3sFtDVb.jpg',
  },
  'Claro video': {
    id: 167,
    logo_path: '/21M5CpiOYGOhHj2sVPXqwt6yeTO.jpg',
  },
  'Curiosity Stream': {
    id: 190,
    logo_path: '/oR1aNm1Qu9jQBkW4VrGPWhqbC3P.jpg',
  },
  'VIX ': {
    id: 457,
    logo_path: '/jwRPknT20dfU1GeVqbcDXFyvtdG.jpg',
  },
  Kocowa: {
    id: 464,
    logo_path: '/hwsU65QW7A4dbMEWkDpgHyCNcfS.jpg',
  },
  'DIRECTV GO': {
    id: 467,
    logo_path: '/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg',
  },
  DOCSVILLE: {
    id: 475,
    logo_path: '/5zqbck5mo8PuVbGu2ngBUdn5Yga.jpg',
  },
  CINE: {
    id: 491,
    logo_path: '/21uSo4VQUdEmeA6RJ6gPSRwusbt.jpg',
  },
  'History Play': {
    id: 478,
    logo_path: '/sYVlH6nNSaR2syC0sjkxErwOOjx.jpg',
  },
  CONTAR: {
    id: 543,
    logo_path: '/zbpPadcBhRpVREGiyWOCM6ioBaf.jpg',
  },
  'Magellan TV': {
    id: 551,
    logo_path: '/mSH24WQcRDJ2fsL5iucXqqRnSRb.jpg',
  },
  'WOW Presents Plus': {
    id: 546,
    logo_path: '/6dET59jNU0ADysghEjl8Unuc7Ca.jpg',
  },
  BroadwayHD: {
    id: 554,
    logo_path: '/6IYZ4NjwPikxN7J9cfSmuyeHeMm.jpg',
  },
  Dekkoo: {
    id: 444,
    logo_path: '/x6nRFzF32hCzMHaVM4RHRo7lsgS.jpg',
  },
  KoreaOnDemand: {
    id: 575,
    logo_path: '/273ohemep46c1r93V1rHOG7hraZ.jpg',
  },
  Hoichoi: {
    id: 315,
    logo_path: '/u7dwMceEbjxd1N3TLEUBILSK2x6.jpg',
  },
  'Pluto TV': {
    id: 300,
    logo_path: '/dB8G41Q6tSL5NBisrIeqByfepBc.jpg',
  },
  Cultpix: {
    id: 692,
    logo_path: '/uauVx3dGWt0GICqdMCBYJObd3Mo.jpg',
  },
  'FilmBox+': {
    id: 701,
    logo_path: '/fbveJTcro9Xw2KuPIIoPPePHiwy.jpg',
  },
  'Sun Nxt': {
    id: 309,
    logo_path: '/6KEQzITx2RrCAQt5Nw9WrL1OI8z.jpg',
  },
  Classix: {
    id: 445,
    logo_path: '/uFjAjvrKMII0H766QzyHDNkZdKX.jpg',
  },
  Crunchyroll: {
    id: 283,
    logo_path: '/mXeC4TrcgdU6ltE9bCBCEORwSQR.jpg',
  },
  'Paramount Plus Apple TV Channel ': {
    id: 1853,
    logo_path: '/tJqmTmQ8jp9WfyaZfApHK8lSywA.jpg',
  },
  'Shahid VIP': {
    id: 1715,
    logo_path: '/7qZED0kLBtiV8mLRNBtW4PQCAqW.jpg',
  },
  'Acorn TV': {
    id: 87,
    logo_path: '/doCc555FPPgGtuaZJxf9QZVpIp5.jpg',
  },
  'Univer Video': {
    id: 1860,
    logo_path: '/44E23wCM3WLsvAVRyk6fye76cZb.jpg',
  },
  Max: {
    id: 1899,
    logo_path: '/fksCUZ9QDWZMUwL2LgMtLckROUN.jpg',
  },
  Plex: {
    id: 538,
    logo_path: '/vLZKlXUNDcZR7ilvfY9Wr9k80FZ.jpg',
  },
  'MGM+ Apple TV Channel': {
    id: 2142,
    logo_path: '/foWKiK4ikpdM72OGN2B8jjyy6OY.jpg',
  },
};

export {
  API,
  IMAGE_URLS,
  MEDIA_TYPE,
  PROJECT_NAME,
  SHELF,
  SLIDER,
  VIDEO_URLS,
  WATCH_PROVIDERS,
};
