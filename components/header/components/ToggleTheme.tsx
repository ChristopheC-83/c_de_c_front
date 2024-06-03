"use client" ;
import { Button } from "@/components/shadcn/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="link" 
    onClick={toggleTheme}
     className="text-foreground hover:text-primary  hover:scale-110 duration-200">
      <h3 className="scale-100 dark:scale-0 duration-300">
        <Moon />
      </h3>
      <h3 className="scale-0 dark:scale-100 duration-300">
        <Sun />
      </h3>
    </Button>
  );
}
