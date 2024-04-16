import { navLinks } from "@/lib/navlinks";
import Link from "next/link";

export default function ComputerLinks() {
  return (
    <div className="flex items-center gap-x-5">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h4 className=" hover:text-primary  hover:scale-105 duration-200">{link.label}</h4>
        </Link>
      ))}
    </div>
  );
}
