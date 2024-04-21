import { useQuery } from "react-query";
import axios from "axios";

export function useShares() {
    return useQuery("shares", async () => {
      const { data } = await axios.get(`http://localhost:8090/Compagnon%20de%20Code/c_de_c_back/api_shares`);
      return data;
    });
  }
   