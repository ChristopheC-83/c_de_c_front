import { useQuery } from "react-query";
import axios from "axios";

export function useTutos() {
    return useQuery("tutos", async () => {
      const { data } = await axios.get(`https://edit.barpat.fun/api_tutos`);
      return data;
    });
  }
export function useLastTuto() {
    return useQuery("tuto", async () => {
      const { data } = await axios.get(`https://edit.barpat.fun/api_last_tuto`);
      return data;
    });
  }
   