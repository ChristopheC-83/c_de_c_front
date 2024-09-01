"use client";
import { navLinks } from "@/datas/navlinks";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import ButtonsProviders from "@/components/commons/ButtonsProvider";
import { useSession } from "next-auth/react";
import ButtonSignOut from "@/components/commons/ButtonSignOut";

export default function ComputerLinks() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-evenly w-full	">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h4 className=" hover:text-primary  duration-200">{link.label}</h4>
        </Link>
      ))}
      {session ? <h4 className=" hover:text-muted-foreground text-end cursor-pointer">
                  <Link href="/profile/settings">profil</Link>
                </h4> : <ButtonsProviders />}
      <ToggleTheme />
    </div>
  );
}
