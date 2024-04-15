import { navLinks } from "@/lib/navlinks";
import Link from "next/link";

export default function ComputerLinks() {
  return (
    <div className="flex items-center gap-x-5">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h4 className=" hover:text-muted-foreground">{link.label}</h4>
        </Link>
      ))}
    </div>
  );
}
