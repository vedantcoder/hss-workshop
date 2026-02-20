"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeInProps = MotionProps & {
  className?: string;
  as?: "div" | "section" | "header";
  children: React.ReactNode;
};

export function FadeIn({
  className,
  as = "div",
  children,
  ...props
}: FadeInProps) {
  const Comp = motion[as];

  return (
    <Comp
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Comp>
  );
}
