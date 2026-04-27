import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default:
      "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400",
    accent:
      "bg-indigo-600 text-white",
    outline:
      "border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400",
    muted:
      "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
