import { socialLinks } from "@/lib/socialLinks";
import Link from "next/link";
import { link } from "fs";

export default function ComputerNetworks() {
  return (
    <div className="flex items-center gap-x-5">
      {socialLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h3>{link.icon}</h3>
        </Link>
      ))}
    </div>
  );
}
