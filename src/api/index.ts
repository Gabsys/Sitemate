import axios from 'axios';
import Config from 'react-native-config';

const getNews = async (searchValue: string) => {
  const respond = await axios.get(
    `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${Config.NEWS_API_KEY}`,
  );
  return respond.data;
};

const NewsApi = {
  getNews,
};

export default NewsApi;
