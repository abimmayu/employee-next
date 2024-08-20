"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function ModalDelete({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      className="fixed left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={close}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}
