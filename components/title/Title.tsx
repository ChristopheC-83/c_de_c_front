
type  TitleProps = {
  title: string;
  subtitle: string;
}

export default function Title({title, subtitle} : TitleProps) {


  return (
        <div className="container">
          <div className="w-full h-fit flex items-center justify-center flex-col gap-y-6">
            <h1 className="text-clip text-center">{title}</h1>
            <h2 className="text-muted-foreground text-center" dangerouslySetInnerHTML={{ __html: subtitle }} />
          </div>
        </div>
  );
}
