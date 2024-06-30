import axios from 'axios';
import Config from 'react-native-config';

const getNews = async () => {
  const respond = await axios.get(
    `https://newsapi.org/v2/everything?q=test&apiKey=${Config.NEWS_API_KEY}`,
  );
  return respond.data;
};

const NewsApi = {
  getNews,
};

export default NewsApi;
