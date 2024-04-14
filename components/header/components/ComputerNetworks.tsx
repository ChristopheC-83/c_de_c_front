"use client";

import { socialLinks } from "@/lib/socialLinks";
import Link from "next/link";
import { ImMail4 } from "react-icons/im";
import { toast } from "sonner";

export default function ComputerNetworks() {
  function copyEmail() {
    navigator.clipboard.writeText("christophe.chiapetta@gmail.com");
    toast.success("Adresse email copiée dans le presse-papier");
  }

  return (
    <div className="flex items-center gap-x-5">
      {/* Les réseaux sociaux */}
      {socialLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h3>{link.icon}</h3>
        </Link>
      ))}

      {/* Email copiée au clic */}
      <a href="mailto:christophe.chiapetta@gmail.com" onClick={copyEmail}>
        <h3>
          <ImMail4 />
        </h3>
      </a>
    </div>
  );
}
