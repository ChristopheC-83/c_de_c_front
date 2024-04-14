import { Button } from "@/components/shadcn/button";



 export default function OneProject({params} : Props) {

const {slug} = params;

return (
    <div>
        Projet {slug}
        <Button variant="success">Click on this project</Button>
       


    </div>

  );

}