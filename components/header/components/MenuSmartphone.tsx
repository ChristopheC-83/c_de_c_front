import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/navlinks";

import Link from "next/link";
import { socialLinks } from "@/lib/socialLinks";
import { ImMail4 } from "react-icons/im";

export default function MenuSmartphone() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-end ">
          <h3>
              <Menu className="h-9 w-9"/>
          </h3>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col my-12 gap-y-6">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <h4 className="hover:opacity-80 text-end">{link.label}</h4>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-between flex-wrap">
          {socialLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <div className="text-3xl">{link.icon}</div>
            </Link>
          ))}
          <a href="mailto:christophe.chiapetta@gmail.com">
              <div className="text-3xl">
                <ImMail4 />
              </div>
            </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
