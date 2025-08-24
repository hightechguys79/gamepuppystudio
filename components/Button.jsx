import React from "react";
export function Button({variant="default", className="", ...props}){
  const base = "px-4 py-2 rounded-xl font-semibold transition";
  const variants = {
    default: "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90",
    outline: "border border-zinc-300 dark:border-zinc-700 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900",
    secondary: "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white",
    ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-900"
  };
  return <button className={base + " " + variants[variant] + " " + className} {...props} />;
}
