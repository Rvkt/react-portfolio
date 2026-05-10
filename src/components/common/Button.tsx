import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20",

    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}