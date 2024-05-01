"use client";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useShares } from "@/hooks/useShares";
import he from "he";
import Image from "next/image";

export default function OneShare({ params }: { params: { id: number } }) {
  const { id } = params;

  const { data: articles, isFetching, error } = useShares();
  const shares: selectedProjectsType[] = articles?.articles;
  const share = shares?.filter((share: { id: number }) => share.id == id)[0];

  
  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;
  
  return (
    <div className="container">
      <div
        className="flex flex-col w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-3 customShadow mb-5 xs:mb-8 sm:mb-10 md:mb-120
      "
      >
        <h2 className="text-clip mb-8 w-fit mx-auto">{share?.title}</h2>

        <div className="w-full flex justify-between sm:justify-around md:justify-evenly items-center">
          <p className="pl-1 p-2 sm:p-3 md:p-4">
            {share?.pitch && he.decode(share.pitch)}
          </p>
          <Image
            src={he.decode(String(share?.thumbnail))}
            alt={share?.title}
            width={300}
            height={200}
            className="my-2 size-1/5 max-w-52 min-w-36 object-contain rounded-lg mb-3 ratio-square"
          />
        </div>
      </div>
      {share?.text && (
        <div className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-1 customShadow">
          <div
            className="p-4 mx-auto max-w-[900px]"
            dangerouslySetInnerHTML={{
              __html: he.decode(share.text.toString()),
            }}
          />
        </div>
      )}
    </div>
  );
}
