"use client";

import React, { useState } from "react";

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0);
  return (
    <div>
      {/* <h1>Template {state}</h1>
      <button onClick={() => setState(state + 1)} className="cursor-pointer">
        Klik Template
      </button> */}
      {children}
    </div>
  );
}
