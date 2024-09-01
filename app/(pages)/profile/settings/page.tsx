

import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { deleteUser, getUser, updateUser } from "@/lib/Actions/actionsUsers";
import Image from "next/image";
import { toast } from "sonner";


export default async function Settings() {
  const user = await getUser();

 

  

  return (
    <section className="border border-gray-200 rounded-md p-3 md:p-5">
      <h2 className="text-3xl uppercase font-black">Profil</h2>
      <p className="text-lg text-muted-foreground">Gérez vos paramètres</p>
      <div className="w-12 h-[1px] bg-white mt-3 mb-5 mx-1"></div>

      <form action={updateUser}>
      {/* <form action=""> */}
        <input type="hidden" name="id" value={user?.id} />
        <Card>
          <CardHeader>
            <CardTitle>Vos Informations</CardTitle>
            <CardDescription>
              Modifiez puis sauvegardez !
            </CardDescription>
          </CardHeader>
          <CardContent>
            {user?.image && (
              <div className="flexMid gap-4">
                <Image
                  src={user?.image}
                  alt={`${user?.name}`}
                  className="w-20 h-20 object-contain mb-4 rounded-full border-2 border-primary customShadow flip_hover"
                  width={150}
                  height={150}
                  unoptimized
                />
                <h3 className="w-fit">{user?.name}</h3>
              </div>
            )}
            
              <Input
                disabled
                name="idUser"
                type="hidden"
                id="idUser"
                placeholder="Votre e-mail"
                defaultValue={user?.id || ""}
              />
            
            <div className="space-y-1">
              <Label htmlFor="name">Pseudo</Label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Votre nom"
                defaultValue={user?.name || ""}
              />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                name="email"
                type="email"
                id="email"
                placeholder="Votre e-mail"
                defaultValue={user?.email || ""}
              />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="image">Avatar</Label>
              <Input
                name="image"
                type="text"
                id="image"
                placeholder="Votre avatar"
                defaultValue={user?.image || ""}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Modifier</Button>
          </CardFooter>
        </Card>
      </form>
        <form action={deleteUser}>
        <input type="hidden" name="id" value={user?.id} />
        <Button className="bg-red-500 mx-2 mb-2 mt-4 hover:bg-red-600 text-white">
          Supprimer mon compte
        </Button>
      </form>
    </section>
  );
}
