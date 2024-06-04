/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from "react";
import Image from "next/image";

type HeroProps = {
    children: ReactNode;
    profilSrc: string; 
  };
  
  export default function CommonHero({ children, profilSrc }: HeroProps) {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-center sm:justify-between md:items-start sm:items-center gap-8">
        <div className="flex justify-center sm:justify-start sm:items-start">
            <Image
                src={profilSrc as string} 
                alt="christophe c."
                width={250}
                height={250}
                className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow mt-7 customShadow"
                priority={true}
            />
        </div>

        <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground customShadow">
            {children}
        </div>
    </div>
  );
}