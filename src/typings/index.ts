interface News {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsSource {
  id: string | null;
  name: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: News[];
}
