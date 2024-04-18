
type  TitleProps = {
  title: string;
  subtitle: string;
}

export default function Title({title, subtitle} : TitleProps) {


  return (
        <div className="container">
          <div className="w-full h-fit flex items-center justify-center flex-col gap-y-6">
            <h1 className="clip">{title}</h1>
            <h2 className="text-muted-foreground">{subtitle}</h2>
          </div>
        </div>
  );
}
