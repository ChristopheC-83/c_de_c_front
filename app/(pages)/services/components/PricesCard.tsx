import { PriceListType } from "@/helpers/customTypes";

type PricesCardProps = {
  price: PriceListType;
};

export default function PricesCard({ price }: PricesCardProps) {
  return (
    <div className="w-full mx-auto border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col justify-between gap-y-4 rounded-lg  bg-card text-card-foreground">
      <h3 className="text-primary mb-6">{price.label}</h3>

      <p>{price.text}</p>

      <div>
        <h3 className="clip text-center mt-8">{price.price}</h3>
        <h4 className="clip text-center mb-8">{price.price2}</h4>
      </div>
    </div>
  );
}
