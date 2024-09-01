"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "../shadcn/button";

export default function ButtonSignOut() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between w-full">
      <Button
        onClick={handleSignOut}
        className="bg-primary text-primary-foreground hover:bg-primary/80 w-full"
      >
        <LogOut /><p className="text-base max-md:hidden font-normal">Déconnexion</p>
      </Button>
    </div>
  );
}
