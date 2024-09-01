import ButtonSignOut from "@/components/commons/ButtonSignOut";
import Link from "next/link";
import DashboardNav from "./components/DashboardNav";

export default async function ProfileLayout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <section
      className={`container max-w-[1200px] md:flex items-center md:items-start md:gap-4 h-screen mt-2 p-2`}
    >
      <DashboardNav />
      <div className="h-full w-full">{children}</div>
    </section>
  );
}
