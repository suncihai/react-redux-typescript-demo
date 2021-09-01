import axios from "axios";

const API_KEY = "24b58a6e9e9f49b2b7237845f0cb6e64";
export const FETCH_NEWS = "FETCH_NEWS";

export const fetchNews = (news: string) => {
  const url = `http://newsapi.org/v2/everything?q=${news}&from=2021-07-31-11&sortBy=publishedAt&apiKey=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_NEWS,
    payload: request,
  };
};
