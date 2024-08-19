"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log("🚀 ~ Home ~ session:", session);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status, router]);
  return (
    <div className="flex w-full place-items-center justify-center mt-20">
      <h1>Home</h1>
    </div>
  );
}
