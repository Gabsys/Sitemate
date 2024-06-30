import {useQuery} from '@tanstack/react-query';
import NewsApi from '../api';

const NEWS_QUERY_KEY = 'news';

const useNewsQuery = (searchValue: string) => {
  const queryResult = useQuery<NewsApiResponse>({
    queryKey: [NEWS_QUERY_KEY, searchValue],
    queryFn: () => NewsApi.getNews(searchValue),
    enabled: false,
  });

  return queryResult;
};

export default useNewsQuery;
