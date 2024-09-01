"use client";

import { signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

import { Button } from "../shadcn/button";
export default function ButtonsProviders() {
  const { data: session, status } = useSession();


    return (
      <>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => signIn('google')}
            className="flex items-center gap-2"
          >
            <FaGoogle />
            <span>Connexion</span>
          </Button>
          {/* <Button onClick={() => signIn('github')} className="flex items-center gap-2">
        <Github />
          <span>Continuer avec GitHub</span>
        </Button> */}
        </div>
      </>
    );
  }

