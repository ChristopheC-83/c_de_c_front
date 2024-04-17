



export default function OneProject({ params }: { params: { slug: string } }) {

const {slug} = params;

return (
    <div>
        Projet {slug}
       


    </div>

  );

}