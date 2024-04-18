import { usedTechnosList } from "@/datas/usedTechnos";
import TechnoCard from "./TechnosCard";



 export default function Technos() {



return (
    <div className="container ">
      <h2 className="text-center clip mb-8">Des technologies qui ont fait leurs preuves !</h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {usedTechnosList.map((techno) => (
          <TechnoCard key={techno.id} techno={techno} />
        ))}
      </div>
    </div>

  );

}