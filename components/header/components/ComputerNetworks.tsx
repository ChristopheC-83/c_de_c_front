/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";
import { socialLinks } from "@/lib/socialLinks";
import Link from "next/link";
import { ImMail4 } from "react-icons/im";
import { toast } from "sonner";
import { RiLoginCircleFill } from "react-icons/ri";
import { Moon, Sun } from "lucide-react";
import ToggleTheme from "./ToggleTheme";

export default function ComputerNetworks() {
  function copyEmail() {
    navigator.clipboard.writeText("christophe.chiapetta@gmail.com");
    toast.success("Adresse email copiée dans le presse-papier");
  }


  return (
    <div className="flex items-center gap-x-5">
      {/* ToggleTheme */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleTheme />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Changez le thème de l'application.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Les réseaux sociaux */}
      {socialLinks.map((link) => (
        <TooltipProvider key={link.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={link.href}>
                <h3 className=" hover:text-primary">{link.icon}</h3>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-primary">
              <p className="text-sm text-popover ">
                {link.toolTipText ? link.toolTipText : link.label}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      {/* Email copiée au clic */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="mailto:christophe.chiapetta@gmail.com" onClick={copyEmail}>
              <h3 className=" hover:text-primary">
                <ImMail4 />
              </h3>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">
              Copiez l'adresse email dans le presse-papier.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* connexion*/}
      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/login">
              <h3>
                <RiLoginCircleFill />
              </h3>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">
              Se connecter.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </div>
  );
}
