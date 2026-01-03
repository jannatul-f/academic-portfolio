import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { NewsItem } from "../types/news";
import { loadNews } from "../utils/loadNews";

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    loadNews().then(setNews);
  }, []);

  return (
    <main>
      <h1>News & Updates</h1>

      <ul className="news-list">
        {news.map((item, i) => (
          <li key={i} className="news-item">
            <small>{item.date}</small>
            <ReactMarkdown>{item.body}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </main>
  );
}
