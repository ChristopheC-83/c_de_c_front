import { navLinks } from "@/datas/navlinks";
import Link from "next/link";

export default function ComputerLinks() {
  return (
    <div className="flex items-center justify-evenly w-full	">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <h4 className=" hover:text-primary  duration-200">{link.label}</h4>
        </Link>
      ))}
    </div>
  );
}
