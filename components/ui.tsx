import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "whatsapp";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  icon,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood focus-visible:ring-offset-2 focus-visible:ring-offset-noir";

  const variants: Record<string, string> = {
    primary:
      "bg-blood text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 hover:bg-blood-bright",
    ghost:
      "glass text-white hover:border-blood/60 hover:bg-white/[0.06] hover:-translate-y-0.5",
    whatsapp:
      "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:-translate-y-0.5 hover:border-emerald-400/60",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      <span>{children}</span>
      {!icon && variant === "primary" && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  highlight,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  highlight?: string;
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {kicker && <span className="eyebrow">{kicker}</span>}
      <h2 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
        {highlight && <span className="text-blood"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p className="max-w-[62ch] text-base leading-relaxed text-ash sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
