"use client";

import { Link as NextViewTransitionsLink } from "next-view-transitions";
import type { ComponentProps } from "react";

export function Link(props: ComponentProps<typeof NextViewTransitionsLink>) {
  return <NextViewTransitionsLink {...props} />;
}
