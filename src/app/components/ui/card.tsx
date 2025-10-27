import React from "react";
import { cn } from "../../lib/utils"; 

export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-muted bg-background text-foreground shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={cn("text-xl font-semibold leading-tight", className)}>{children}</h3>;
}

export function CardDescription({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
}

export function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("p-6 pt-4", className)}>{children}</div>;
}
