import { useQuery } from "react-query";
import axios from "axios";

export function useArticles() {
    return useQuery("projects", async () => {
      const { data } = await axios.get(`https://edit.barpat.fun/api_articles`);
      return data;
    });
  }
export function useLastArticle() {
    return useQuery("project", async () => {
      const { data } = await axios.get(`https://edit.barpat.fun/api_last_article`);
      return data;
    });
  }
   