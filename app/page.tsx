import { Button } from "@/components/shadcn/button";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <h1>Coucou</h1>
      <Button variant="success">Click me</Button>
      <Eye size={32} />
      
      </main>
  );
}
