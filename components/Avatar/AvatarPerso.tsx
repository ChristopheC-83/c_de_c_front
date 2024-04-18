import Image from "next/image";
import profil from "@/public/images/profil1.png";

export default function AvatarPerso() {
  return (
    <div className="flex items-center justify-center sm:justify-end">
      <Image
        src={profil}
        alt="christophe c."
        width={250}
        height={250}
        className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow"
      />
    </div>
  );
}