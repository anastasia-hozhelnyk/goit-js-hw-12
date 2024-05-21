'use strict';

import axios, { Axios } from 'axios';

const API_KEY = '43812736-1272d84cdac6660be422ea1fc';
const BASE_URL = `https://pixabay.com/api/`;

export async function getRequest(q, per_page, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page,
  });

  axios.defaults.baseURL = `https://pixabay.com/api/`;

  return await axios(`?${searchParams}`);
}
