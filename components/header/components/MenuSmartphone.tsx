"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/navlinks";

import Link from "next/link";
import { socialLinks } from "@/lib/socialLinks";
import { ImMail4 } from "react-icons/im";
import ToggleTheme from "./ToggleTheme";

export default function MenuSmartphone() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-end ">
          <h3>
            <Menu className="h-9 w-9  hover:text-muted-foreground" />
          </h3>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col my-12 gap-y-6">
          <div className="flex w-full justify-end mx-4  hover:text-muted-foreground">
            <ToggleTheme />
          </div>
          {navLinks.map((link) => (
            <SheetClose key={link.id} asChild>
              <Link href={link.href}>
                <h4 className=" hover:text-muted-foreground text-end ">
                  {link.label}
                </h4>
              </Link>
            </SheetClose>
          ))}
        </div>

        <div className="w-full flex justify-between flex-wrap">
          {socialLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <div className="text-3xl hover:text-muted-foreground ">
                {link.icon}
              </div>
            </Link>
          ))}
          <a href="mailto:christophe.chiapetta@gmail.com">
            <div className="text-3xl  hover:text-muted-foreground">
              <ImMail4 />
            </div>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
