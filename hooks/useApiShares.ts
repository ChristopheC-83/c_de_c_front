import { useQuery } from "react-query";
import axios from "axios";

export function useShares() {
    return useQuery("shares", async () => {
      const { data } = await axios.get(`https://edit-blog-code.ducompagnon.fr/api/api_shares`);
      return data;
    });
  }
export function useLastShare() {
    return useQuery("share", async () => {
      const { data } = await axios.get(`https://edit-blog-code.ducompagnon.fr/api/api_last_share`);
      return data;
    });
  }