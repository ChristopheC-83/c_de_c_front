import { useQuery } from "react-query";
import axios from "axios";

export function useProjects() {
    return useQuery("projects", async () => {
      const { data } = await axios.get(`https://edit-blog-code.ducompagnon.fr/api/api_projets`);
      return data;
    });
  }
export function useLastProject() {
    return useQuery("project", async () => {
      const { data } = await axios.get(`https://edit-blog-code.ducompagnon.fr/api/api_last_projet`);
      return data;
    });
  }
   