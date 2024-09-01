"use client";
import { Notebook, Settings, CreditCard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaUserAstronaut } from "react-icons/fa";
import { BsPostcardHeart } from "react-icons/bs";
import ButtonSignOut from "@/components/commons/ButtonSignOut";
import { Button } from "@/components/shadcn/button";

export default function DashboardNav() {
  const pathname = usePathname();
  const session = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/");
  }
  const menuItems = [
    {
      name: "Profil",
      icon: FaUserAstronaut,
      path: "/profile/settings",
    },
    {
      name: "Favoris",
      icon: BsPostcardHeart,
      path: "/profile/favorites",
    },
    // {
    //   name: "Payment",
    //   icon: CreditCard,
    //   path: "/dashboard/payment",
    // },
  ];

  return (
    <nav
      className={`flex md:flex-col md:justify-start md:h-full w-full max-md:mb-3 md:w-16 lg:w-40 gap-5`}
    >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`flex items-center justify-between p-2 lg:p-6 w-full h-12 rounded-lg ${
            pathname === item.path
              ? "bg-primary-foreground text-primary cursor-default pointer-events-none	"
              : "bg-primary text-black hover:bg-primary/80"
          }   duration-300`}
        >
          <item.icon
            className={`w-6 h-6 color-black ${
              pathname === item.path ? "" : " "
            }`}
          />
          <p className={`ml-2 max-lg:hidden text-base`}>{item.name}</p>
        </Link>
      ))}
      <ButtonSignOut />
    </nav>
  );
}
