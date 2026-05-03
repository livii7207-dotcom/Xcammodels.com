export default function LogoPinup({ size = 'md', showText = false }: { size?: 'sm' | 'md' | 'lg'; showText?: boolean }) {
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.6 : 1;
  const w = Math.round(300 * scale);
  const h = Math.round((showText ? 440 : 380) * scale);

  return (
    <div className="relative inline-flex flex-col items-center">
      <a href="/register" className="mb-6 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-white shimmer-btn border border-white/20 hover:scale-105 transition-transform">
        Apply Now
      </a>
      <svg width={w} height={h} viewBox={`0 0 300 ${showText ? 440 : 380}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="pinup-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b1" />
            <feGaussianBlur stdDeviation="12" result="b2" />
            <feGaussianBlur stdDeviation="20" result="b3" />
            <feMerge><feMergeNode in="b3" /><feMergeNode in="b2" /><feMergeNode in="b1" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="pinup-text-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <style>{`
            @keyframes pinup-pulse {
              0%, 100% { filter: drop-shadow(0 0 6px #ff0080) drop-shadow(0 0 16px #ff0080) drop-shadow(0 0 32px rgba(255,0,128,0.4)); opacity: 1; }
              50% { filter: drop-shadow(0 0 10px #ff1493) drop-shadow(0 0 30px #ff1493) drop-shadow(0 0 60px rgba(255,20,147,0.55)); opacity: 0.9; }
            }
            .pinup-glow-group { animation: pinup-pulse 2.5s ease-in-out infinite; }
          `}</style>
        </defs>
        <g className="pinup-glow-group" filter="url(#pinup-glow)">
          <line x1="30" y1="140" x2="150" y2="280" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="270" y1="140" x2="150" y2="280" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30" y1="140" x2="270" y2="140" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="280" x2="150" y2="340" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="100" y1="340" x2="200" y2="340" stroke="#ff0080" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 100 340 Q 100 348 105 348" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 200 340 Q 200 348 195 348" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 68 178 Q 150 170 232 178" stroke="#ff0080" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
          <ellipse cx="148" cy="68" rx="16" ry="19" stroke="#ff0080" strokeWidth="2" fill="none" transform="rotate(-15 148 68)" />
          <path d="M 138 52 C 128 42, 118 48, 115 60 C 112 75, 108 92, 115 108" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 140 50 C 132 38, 148 32, 158 42" stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 160 56 C 168 52, 172 60, 168 72" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 145 85 C 142 92, 140 96, 138 102" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 138 102 C 125 118, 118 140, 120 160 C 122 175, 128 185, 135 192" stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 152 98 C 162 108, 168 118, 166 128" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 166 128 C 164 136, 156 142, 148 146" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 148 146 C 140 150, 136 156, 135 162" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 135 162 C 134 172, 138 182, 148 190" stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 135 192 C 140 194, 145 192, 148 190" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 130 108 C 115 95, 100 85, 85 78" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 85 78 C 72 72, 58 62, 48 55" stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 48 55 C 44 52, 40 54, 38 58" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <line x1="22" y1="38" x2="52" y2="38" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="38" x2="37" y2="55" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="52" y1="38" x2="37" y2="55" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="37" y1="55" x2="37" y2="62" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="62" x2="44" y2="62" stroke="#ff0080" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 158 105 C 178 112, 205 120, 230 130 C 248 136, 260 140, 268 140" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 268 140 C 272 139, 274 141, 272 144" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 148 190 C 168 195, 192 188, 215 170" stroke="#ff0080" strokeWidth="2.3" strokeLinecap="round" fill="none" />
          <path d="M 215 170 C 235 152, 252 132, 262 115" stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 262 115 C 266 108, 272 105, 278 104" stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 272 105 L 268 95" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 140 192 C 162 202, 188 200, 210 190" stroke="#ff0080" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 210 190 C 232 178, 250 160, 260 142" stroke="#ff0080" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 260 142 C 264 136, 270 133, 276 132" stroke="#ff0080" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M 270 133 L 266 124" stroke="#ff0080" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
        {showText && (
          <g filter="url(#pinup-text-glow)">
            <text x="150" y="395" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="24" fill="white" className="neon-text">CamModels.com</text>
          </g>
        )}
      </svg>
    </div>
  );
}
