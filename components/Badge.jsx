import React from "react";
export function Badge({ variant="default", className="", children }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold";
  const styles = variant === "secondary"
    ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white"
    : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
