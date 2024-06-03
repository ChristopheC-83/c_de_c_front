
import { socialLinks } from "@/datas/socialLinks";
import Link from "next/link";

export default function FooterNetworks() {
  return (
    <div className="w-full p-4">
      <h4 className="mb-6">
        <u>Me suivre :</u>
      </h4>
      {socialLinks.map((link) => (
        <Link href={link.href} key={link.id} className="flex items-center gap-6 my-4 hover:text-primary">
         
              <div className="text-2xl">{link.icon}</div>
              <h5>{link.label}</h5>
          
        </Link>
      ))}
    </div>
  );
}
