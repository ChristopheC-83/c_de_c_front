import { priceList } from "@/datas/priceList";
import PricesCard from "./PricesCard";



 export default function Prices() {



return (
    <div className="container ">
    <h2 className="text-clip mb-8">Tarification ajustée et ajustable !</h2>

    <div className="flex max-xl:flex-col gap-8 justify-between">
      {priceList.map((price) => (
        <PricesCard key={price.id} price={price}/>
    ))}
    </div>
    </div>

  );

}