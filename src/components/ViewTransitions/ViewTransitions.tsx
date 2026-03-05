"use client";

import { ViewTransitions as NextViewTransitions } from "next-view-transitions";
import type { ReactNode } from "react";

export function ViewTransitions({ children }: { children: ReactNode }) {
  return <NextViewTransitions>{children}</NextViewTransitions>;
}
