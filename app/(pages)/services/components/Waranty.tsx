import { WarantyList } from "@/datas/warantyList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/shadcn/accordion";

 export default function Waranty() {



return (
    <div className="container ">
      <h2 className="text-clip  mb-8">FAQ et Garantie</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full lg:w-10/12 lg:mx-auto"
      >
        {WarantyList.map((waranty) => (
          <AccordionItem value={`item-${waranty.id}`} key={waranty.id}>
            <AccordionTrigger>
              <div className="flex justify-between items-center w-full pr-8">
                <h3>{waranty.label}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="bg-card p-2">{waranty.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </div>

  );

}