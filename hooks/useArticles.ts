import { useQuery } from "react-query";
import axios from "axios";

export function useArticles() {
    return useQuery("projects", async () => {
      const { data } = await axios.get(`http://localhost:8090/Compagnon%20de%20Code/c_de_c_back/api_articles`);
      return data;
    });
  }
  