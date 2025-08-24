import React from "react";
export function Card({ className="", children }){
  return <div className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 ${className}`}>{children}</div>;
}
export function CardHeader({ className="", children }){ return <div className={`p-5 ${className}`}>{children}</div>; }
export function CardTitle({ className="", children }){ return <h3 className={`font-semibold ${className}`}>{children}</h3>; }
export function CardContent({ className="", children }){ return <div className={`p-5 ${className}`}>{children}</div>; }
