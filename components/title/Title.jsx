export default function Title({subtitle}) {
  return (
        <div className="container">
          <div className="w-full h-fit flex items-center justify-center flex-col gap-y-6">
            <h1 className="clip">Compagnon de Code</h1>
            <h2 className="text-muted-foreground">{subtitle}</h2>
          </div>
        </div>
  );
}
