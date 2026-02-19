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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Comp>
  );
}
