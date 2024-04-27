import { PriceListType } from "@/helpers/customTypes";
import Link from "next/link";

type PricesCardProps = {
  price: PriceListType;
};

export default function PricesCard({ price }: PricesCardProps) {
  return (
    <div className="w-full mx-auto border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col justify-between gap-y-4 rounded-lg  bg-card text-card-foreground customShadow">
      <h3 className="text-primary mb-6">{price.label}</h3>

      <p>{price.text}</p>

      <div>
        <h3 className="text-clip  text-center mt-8">{price.price}</h3>
        <h4 className="text-clip  text-center mb-8">{price.price2}</h4>
      </div>

    <Link href={price.link} className="mb-3 bg-clip w-fit p-3 mx-auto rounded-lg customShadow cursor-pointer "><h4>En savoir +</h4>
    </Link>

    </div>
  );
}
