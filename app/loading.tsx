import { LogoMark } from "@/components/Logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-noir">
      <div className="ambient-red absolute inset-0" />
      <div className="relative animate-pulse">
        <LogoMark className="h-16 w-16 drop-shadow-[0_0_30px_rgba(225,6,0,0.6)]" />
      </div>
      <div className="relative h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="absolute inset-y-0 left-0 w-1/2 animate-marquee rounded-full bg-gradient-to-r from-transparent via-blood to-transparent" />
      </div>
      <p className="relative font-heading text-xs uppercase tracking-[0.3em] text-white/50">
        Sécurisation…
      </p>
    </div>
  );
}
