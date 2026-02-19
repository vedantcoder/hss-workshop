"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function LazyMount({
  className,
  rootMargin = "200px",
  placeholder,
  children,
}: {
  className?: string;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (mounted) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMounted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={ref} className={cn(className)}>
      {mounted ? children : placeholder}
    </div>
  );
}
