export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="#0a1120" />
      <path d="M12 8H17V32H12V8Z" fill="#eef4fb" />
      <path
        d="M17 20L27 8H33.5L22 20.5L34 32H27.2L17 21.2V20Z"
        fill="url(#logoGradient)"
      />
      <circle cx="27.5" cy="14" r="3.4" fill="#3bc7f0" />
      <defs>
        <linearGradient id="logoGradient" x1="17" y1="8" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f6fed" />
          <stop offset="1" stopColor="#0a1120" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ServiceIcon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "mark":
      return (
        <svg {...common}>
          <path d="M12 3L4 20h5l3-7 3 7h5L12 3Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13l9 5 9-5" />
          <path d="M3 8v5" />
          <path d="M21 8v5" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 6 2 12l6 6" />
          <path d="M16 6l6 6-6 6" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <rect x="3" y="13" width="18" height="7" rx="1.5" />
          <path d="M7 7.5h.01" />
          <path d="M7 16.5h.01" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    default:
      return null;
  }
}

export function OutputArt({ type }) {
  switch (type) {
    case "card":
      return (
        <svg viewBox="0 0 140 90" className="h-24 w-full" aria-hidden="true">
          <rect x="10" y="14" width="110" height="64" rx="7" fill="url(#cardGrad)" />
          <circle cx="30" cy="34" r="5" fill="#7fe3ff" />
          <rect x="30" y="52" width="60" height="4" rx="2" fill="#c9e6ff" />
          <rect x="30" y="62" width="40" height="4" rx="2" fill="#7d9cd6" />
          <defs>
            <linearGradient id="cardGrad" x1="10" y1="14" x2="120" y2="78" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1c3d7a" />
              <stop offset="1" stopColor="#0a1120" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 140 90" className="h-24 w-full" aria-hidden="true">
          <path d="M30 34 70 20l40 14v34l-40 14-40-14V34Z" fill="#12294f" />
          <path d="M30 34 70 48v34l-40-14V34Z" fill="#0a1120" />
          <path d="M110 34 70 48v34l40-14V34Z" fill="#1c3d7a" />
          <path d="M30 34 70 20l40 14-40 14-40-14Z" fill="#3bc7f0" />
          <circle cx="70" cy="30" r="3" fill="#eef4fb" />
        </svg>
      );
    case "banner":
      return (
        <svg viewBox="0 0 140 90" className="h-24 w-full" aria-hidden="true">
          <rect x="50" y="10" width="40" height="70" rx="4" fill="url(#bannerGrad)" />
          <circle cx="70" cy="28" r="5" fill="#7fe3ff" />
          <rect x="58" y="42" width="24" height="4" rx="2" fill="#c9e6ff" />
          <rect x="58" y="50" width="24" height="4" rx="2" fill="#7d9cd6" />
          <defs>
            <linearGradient id="bannerGrad" x1="50" y1="10" x2="90" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1c3d7a" />
              <stop offset="1" stopColor="#0a1120" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "browser":
      return (
        <svg viewBox="0 0 140 90" className="h-24 w-full" aria-hidden="true">
          <rect x="10" y="14" width="120" height="62" rx="6" fill="#eef2f8" stroke="#d7dee8" />
          <rect x="10" y="14" width="120" height="14" rx="6" fill="#e2e8f2" />
          <circle cx="20" cy="21" r="2" fill="#c3ccd9" />
          <circle cx="27" cy="21" r="2" fill="#c3ccd9" />
          <circle cx="34" cy="21" r="2" fill="#c3ccd9" />
          <rect x="18" y="36" width="60" height="10" rx="2" fill="url(#browserGrad)" />
          <rect x="18" y="52" width="30" height="5" rx="2" fill="#7fe3ff" />
          <rect x="52" y="52" width="30" height="5" rx="2" fill="#d7dee8" />
          <rect x="86" y="52" width="30" height="5" rx="2" fill="#d7dee8" />
          <rect x="18" y="62" width="40" height="5" rx="2" fill="#d7dee8" />
          <defs>
            <linearGradient id="browserGrad" x1="18" y1="36" x2="78" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2f6fed" />
              <stop offset="1" stopColor="#3bc7f0" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}
