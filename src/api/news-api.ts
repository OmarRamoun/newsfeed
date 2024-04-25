// TODO: DANGER! move this to .env once you are finished
const API_KEY = 'd790cbded51a41619306d6b3a3d6d039';
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const fetchNews = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
