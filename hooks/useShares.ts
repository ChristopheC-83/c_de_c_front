import { useQuery } from "react-query";
import axios from "axios";

export function useShares() {
    return useQuery("shares", async () => {
      const { data } = await axios.get(`https://edit.barpat.fun/api_shares`);
      return data;
    });
  }
   