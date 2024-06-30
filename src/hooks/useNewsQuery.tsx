import {useQuery} from '@tanstack/react-query';
import NewsApi from '../api';

const NEWS_QUERY_KEY = 'news';

const useNewsQuery = () => {
  const queryResult = useQuery<NewsApiResponse>({
    queryKey: [NEWS_QUERY_KEY],
    queryFn: NewsApi.getNews,
  });

  return {
    news: queryResult.data?.articles ?? [],
  };
};

export default useNewsQuery;
