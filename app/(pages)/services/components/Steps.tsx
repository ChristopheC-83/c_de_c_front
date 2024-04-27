import { stepsList } from "@/datas/stepsList";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";

export default function Steps() {
  return (
    <div className="container ">
      <h2 className="text-clip  mb-8">Déroulé et fonctionnement.</h2>

      <Accordion
        type="single"
        collapsible
        className="w-full lg:w-10/12 lg:mx-auto"
      >
        {stepsList.map((step) => (
          <AccordionItem value={`item-${step.id}`} key={step.id}>
            <AccordionTrigger>
              <div className="flex justify-between items-center w-full pr-8">
                <h3>{step.label}</h3>{" "}
                <div className="text-primary text-3xl">{step.icon}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="bg-card p-2">{step.text}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
