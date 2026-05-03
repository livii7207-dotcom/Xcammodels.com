export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const scale = size === 'lg' ? 1.4 : size === 'sm' ? 0.75 : 1;
  const h = Math.round(38 * scale);
  const w = Math.round(240 * scale);

  return (
    <svg width={w} height={h} viewBox="0 0 240 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="badge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff0080" />
          <stop offset="50%" stopColor="#cc0060" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff0080" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff0080" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="55%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="badge-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="x-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="rope-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="text-neon-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <style>{`
          @keyframes logo-neon-pulse {
            0%, 100% { opacity: 1; filter: brightness(1); }
            50% { opacity: 0.8; filter: brightness(1.2); }
          }
          @keyframes logo-rope {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.45; }
          }
          .logo-neon { animation: logo-neon-pulse 2s ease-in-out infinite; }
          .logo-rope { animation: logo-rope 1.8s ease-in-out infinite; }
        `}</style>
      </defs>
      <rect x="2" y="2" width="34" height="34" rx="12" fill="url(#badge-grad)" opacity="0.75" filter="url(#badge-glow)" />
      <rect x="0" y="0" width="38" height="38" rx="10" fill="url(#badge-grad)" />
      <g className="logo-rope" filter="url(#rope-glow)">
        <rect x="-2" y="-2" width="42" height="42" rx="12" fill="none" stroke="#ff69b4" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.95" />
      </g>
      <rect x="1" y="1" width="36" height="36" rx="9" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="0" y="0" width="38" height="18" rx="10" fill="url(#gloss)" />
      <g filter="url(#x-glow)">
        <path d="M 8 8 Q 19 17 30 30" stroke="white" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M 30 8 Q 19 17 8 30" stroke="white" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      </g>
      <path d="M 19 14 L 24 19 L 19 24 L 14 19 Z" fill="white" opacity="0.95" />
      <path transform="translate(42,3)" d="M0,-2.8 L.7,-.7 L2.8,0 L.7,.7 L0,2.8 L-.7,.7 L-2.8,0 L-.7,-.7Z" fill="#ff69b4" opacity="0.95" />
      <path transform="translate(41,35)" d="M0,-2 L.5,-.5 L2,0 L.5,.5 L0,2 L-.5,.5 L-2,0 L-.5,-.5Z" fill="#f9a8d4" opacity="0.85" />
      <path transform="translate(47,20)" d="M0,-1.5 L.37,-.37 L1.5,0 L.37,.37 L0,1.5 L-.37,.37 L-1.5,0 L-.37,-.37Z" fill="#f9a8d4" opacity="0.7" />
      <path transform="translate(44,12)" d="M0,-1.2 L.3,-.3 L1.2,0 L.3,.3 L0,1.2 L-.3,.3 L-1.2,0 L-.3,-.3Z" fill="#ff69b4" opacity="0.55" />
      <g className="logo-neon" filter="url(#text-neon-glow)">
        <text x="58" y="27" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.2" fill="white">CamModels</text>
      </g>
      <rect x="56" y="31" width="172" height="1.5" rx="1" fill="url(#line-grad)" />
    </svg>
  );
}
