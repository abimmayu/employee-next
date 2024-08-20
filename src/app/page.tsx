"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
    <>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <Image
          src="https://picsum.photos/seed/picsum/1900/850"
          className="absolute top-0 left-0 min-h-full ob"
          alt=""
          width={1900}
          height={850}
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">
              WE ARE EXPERTS
            </span>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Welcome to our platform
            </h1>

            <Link
              className="mt-10 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              href={"/employee"}
            >
              Go to Employee List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
