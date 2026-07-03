import { COMPANY } from "@/lib/site";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${COMPANY.name} logo`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gfs-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF2A1A" />
          <stop offset="100%" stopColor="#B00300" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#gfs-red)" />
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="22"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
      />
      {/* White disc behind the G */}
      <circle cx="47" cy="52" r="27" fill="#F6F6F6" />
      {/* The G letterform */}
      <path
        d="M47 30
           a22 22 0 1 0 0 44
           a22 22 0 0 0 22-22
           h-20
           v8
           h11
           a13 13 0 1 1 -13-13
           a13 13 0 0 1 9 3.6
           l6-6
           A22 22 0 0 0 47 30 Z"
        fill="#0A0A0A"
      />
      {/* CCTV camera glyph */}
      <g transform="translate(56 30) rotate(12)">
        <rect x="0" y="4" width="22" height="10" rx="2.5" fill="#0A0A0A" />
        <circle cx="17" cy="9" r="3.2" fill="#F6F6F6" />
        <circle cx="17" cy="9" r="1.4" fill="#0A0A0A" />
        <rect x="6" y="14" width="3" height="6" rx="1" fill="#0A0A0A" />
        <rect x="1" y="19" width="12" height="2.6" rx="1.3" fill="#0A0A0A" />
      </g>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#accueil" className="group flex items-center gap-3" aria-label={COMPANY.name}>
      <span className="relative transition-transform duration-300 group-hover:scale-105">
        <LogoMark className="h-11 w-11 drop-shadow-[0_0_16px_rgba(225,6,0,0.45)]" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[15px] font-extrabold tracking-tight text-white">
            GLOBAL FOURNI
          </span>
          <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.42em] text-blood">
            Sécurité
          </span>
        </span>
      )}
    </a>
  );
}
