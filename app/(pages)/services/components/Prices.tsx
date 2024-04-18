import { priceList } from "@/datas/priceList";
import PricesCard from "./PricesCard";



 export default function Prices() {



return (
    <div className="container ">
    <h2 className="text-center clip mb-8">Tarification</h2>

    <div className="flex flex-col lg:flex-row gap-8 justify-between">
      {priceList.map((price) => (
        <PricesCard key={price.id} price={price}/>
    ))}
    </div>
    </div>

  );

}