import { useState, useEffect, useRef } from 'react';
import Logo from '../components/Logo';

const PLATFORMS = [
  { name: 'Chaturbate', abbr: 'CB', category: 'Live Stream', desc: "World's #1 cam platform — massive audience, tips & privates", color: '#f47321', href: 'https://chaturbate.com/in/?tour=5zjT&campaign=DddwF&track=default' },
  { name: 'OnlyFans', abbr: 'OF', category: 'Content', desc: 'Subscriptions, pay-per-view & direct tips', color: '#00aff0', href: 'https://onlyfans.com?ref=40962198' },
  { name: 'Stripchat', abbr: 'SC', category: 'Live Stream', desc: 'Tips, privates & group shows with global reach', color: '#00b4a0', href: 'https://stripchat.com/affiliates' },
  { name: 'Cam4', abbr: 'C4', category: 'Live Stream', desc: 'Live broadcasts with built-in analytics', color: '#e8173a', href: 'https://cam4.com/' },
  { name: 'ManyVids', abbr: 'MV', category: 'Content', desc: 'Sell clips, photo sets & custom content', color: '#e91e8c', href: 'https://manyvids.com/' },
  { name: 'IWantClips', abbr: 'IW', category: 'Content', desc: 'Custom clips & wish lists — high buyer intent', color: '#8b5cf6', href: 'https://iwantclips.com/' },
  { name: 'LoyalFans', abbr: 'LF', category: 'Content', desc: 'Subscriptions, fan messaging & exclusive drops', color: '#ff6b35', href: 'https://loyalfans.com/' },
  { name: 'SkyPrivate', abbr: 'SP', category: 'Independent', desc: 'Private 1-on-1 video calls at your own rate', color: '#1a73e8', href: 'https://skyprivate.com/' },
];

const STEPS = [
  { n: '01', title: 'Register', desc: 'Fill out our quick online form — takes under 5 minutes.' },
  { n: '02', title: 'Set Up Profile', desc: 'Add your payment info and ID verification.' },
  { n: '03', title: 'Pick a Platform', desc: 'Choose from 8 partner sites that fit your style.' },
  { n: '04', title: 'Earn Daily', desc: 'Go live and get paid every single day.' },
];

const FAQ_ITEMS = [
  { q: 'Do I need any experience?', a: 'None at all. We guide you through everything from setup to your first payout with real human support.' },
  { q: 'How does daily pay work?', a: 'Your earnings are deposited automatically every day via bank transfer, Paxum, or your preferred method — no minimums.' },
  { q: 'Will anyone find out?', a: 'Your real identity is never exposed. Your name and personal info stay completely private.' },
  { q: 'What do I need to get started?', a: 'A phone or computer, any webcam (HD preferred), decent internet, and a valid government ID.' },
  { q: 'Who can join?', a: 'Everyone is welcome — women, men, couples, and non-binary creators. All body types, all backgrounds. The only requirements are that you\'re 18+ and have a valid government ID.' },
  { q: 'Is XCamModels free?', a: 'Completely free. We never take a cut of your earnings. The platforms pay you directly — XCamModels helps you get set up and earns a referral fee from the platforms themselves, not from you.' },
];

const TESTIMONIALS = [
  { name: 'Mia K.', platform: 'Chaturbate · 14 months', quote: 'I was skeptical at first but the daily payouts are real. I made back my setup costs in the first week alone.', earnings: '$3,200/mo avg', breakdown: 'Live tips $2,100 · Private shows $1,100', stars: 5 },
  { name: 'Destiny R.', platform: 'StripChat · 8 months', quote: 'Zero experience when I joined. The support team walked me through everything. This is now my full-time income.', earnings: '$2,800/mo avg', breakdown: 'Live shows $1,900 · Private rooms $900', stars: 5 },
  { name: 'Jade L.', platform: 'ManyVids + LoyalFans · 6 months', quote: 'Running two platforms sounded complicated but XCamModels handles all the setup. I just focus on content.', earnings: '$4,100/mo avg', breakdown: 'ManyVids clips $2,400 · LoyalFans subs $1,700', stars: 5 },
];

const MARQUEE_ITEMS = [
  { label: 'Chaturbate', color: '#f47321' },
  { label: 'OnlyFans', color: '#00aff0' },
  { label: 'Stripchat', color: '#00b4a0' },
  { label: 'Cam4', color: '#e8173a' },
  { label: 'ManyVids', color: '#e91e8c' },
  { label: 'IWantClips', color: '#8b5cf6' },
  { label: 'LoyalFans', color: '#ff6b35' },
  { label: 'SkyPrivate', color: '#1a73e8' },
  { label: 'Daily Payouts', color: '#ff1493' },
  { label: 'Full Privacy', color: '#a855f7' },
  { label: 'Zero Fees', color: '#ff1493' },
  { label: 'Work From Home', color: '#a855f7' },
];

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { el.classList.add('visible'); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function SectionDivider() {
  return (
    <div className="h-px max-w-4xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(255,20,147,0.18), transparent)' }} />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useFadeIn(); const howRef = useFadeIn();
  const platformsRef = useFadeIn(); const revenueRef = useFadeIn(); const testimonialsRef = useFadeIn();
  const faqRef = useFadeIn(); const ctaRef = useFadeIn();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#07080f' }}>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
          <a href="/"><Logo size="md" /></a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            {[['#platforms','Platforms'],['#how','How It Works'],['/guide','Guide'],['#faq','FAQ']].map(([href,label]) => (
              <a key={href} href={href} className="hover:text-white transition-colors duration-200">{label}</a>
            ))}
            <a href="/register" className="px-5 py-2 rounded-full text-white font-semibold shimmer-btn">Start Earning</a>
          </nav>
          <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu-open md:hidden glass px-5 py-5 flex flex-col gap-4 text-sm font-medium text-gray-300 border-t border-white/5">
            {[['#platforms','Platforms'],['#how','How It Works'],['/guide','Guide'],['#faq','FAQ']].map(([href,label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">{label}</a>
            ))}
            <a href="/register" onClick={() => setMenuOpen(false)} className="text-center py-3 rounded-full text-white font-semibold shimmer-btn">Start Earning</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16 overflow-hidden">
        {/* Dot grid texture */}
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)' }} />
        {/* Aurora blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[800px] h-[800px]" style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,20,147,0.55) 0%, transparent 65%)' }} />
          <div className="aurora-blob w-[550px] h-[550px]" style={{ bottom: '5%', right: '-8%', background: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, transparent 65%)', animationDelay: '5s', animationDuration: '16s' }} />
          <div className="aurora-blob w-[420px] h-[420px]" style={{ top: '35%', left: '-6%', background: 'radial-gradient(circle, rgba(192,38,211,0.4) 0%, transparent 65%)', animationDelay: '9s', animationDuration: '19s' }} />
        </div>

        <div ref={heroRef} className="fade-up relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-extrabold leading-[1.05] tracking-tight mb-6">
            Earn More.{' '}<span className="neon-text">Stream Smarter.</span><br />Get Paid Daily.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-3">
            Apply once. Get set up on 8 top platforms. The platforms pay you directly — every single day. Free to join, no fees ever.
          </p>
          <p className="text-sm text-gray-600 mb-8">Women · Men · Couples · Non-binary · All body types · 18+</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
            <a href="/register" className="px-8 py-4 rounded-full text-white text-lg font-bold shimmer-btn">Apply as a Model →</a>
            <a href="#how" className="px-8 py-4 rounded-full text-white text-lg font-semibold glass card-hover">How It Works</a>
          </div>
          <a href="/guide" className="inline-block text-sm text-gray-500 hover:text-pink-400 transition-colors duration-200 mb-14">
            New here? Read our free beginner's guide →
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: 'Free', label: 'To Join', sub: 'No fees, ever' },
              { val: '8', label: 'Platforms', sub: 'All paying daily' },
              { val: '$0', label: 'Commission', sub: 'You keep it all' },
              { val: '10K+', label: 'Creators', sub: 'Already earning' },
            ].map(({ val, label, sub }, i) => (
              <div key={label} className="glass rounded-2xl py-6 px-4 text-center card-hover neon-border" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-3xl sm:text-4xl font-display font-extrabold gradient-text mb-1">{val}</div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-gray-600 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling platform marquee */}
      <div className="overflow-hidden border-y border-white/5 py-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(({ label, color }, i) => (
            <span key={i} className="flex items-center gap-6 mx-6 text-sm font-semibold whitespace-nowrap" style={{ color }}>
              {label}
              <span className="w-1 h-1 rounded-full inline-block opacity-40" style={{ background: color }} />
            </span>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* How It Works */}
      <section id="how" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={howRef} className="fade-up">
            <div className="text-center mb-14">
              <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Start Earning in <span className="neon-text">4 Steps</span></h2>
              <p className="text-gray-500">No experience needed. We handle the rest.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map(({ n, title, desc }) => (
                <div key={n} className="glass rounded-3xl p-7 card-hover neon-border">
                  <div className="text-5xl font-display font-extrabold mb-4 leading-none gradient-text">{n}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Platforms */}
      <section id="platforms" className="py-24 px-4 sm:px-6" style={{ background: 'rgba(255,20,147,0.025)' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={platformsRef} className="fade-up">
            <div className="text-center mb-14">
              <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">8 Partner Sites</p>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">One Account. <span className="neon-text">Every Platform.</span></h2>
              <p className="text-gray-500 max-w-xl mx-auto">We get you set up on the ones that fit you. You just stream — they pay you directly.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PLATFORMS.map(({ name, abbr, category, desc, color, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 card-hover border border-white/5 group block"
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = color + '55'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 24px ${color}22`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-sm mb-4" style={{ background: `${color}22`, border: `1.5px solid ${color}44`, color }}>{abbr}</div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: `${color}18`, color }}>{category}</span>
                  <h3 className="font-display font-bold text-base mb-1 text-white">{name}</h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{desc}</p>
                  <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color }}>Sign Up →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Us */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={revenueRef} className="fade-up">
            <div className="text-center mb-14">
              <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Zero Fees. <span className="gradient-text">100% Yours.</span></h2>
              <p className="text-gray-500 max-w-lg mx-auto">The platforms pay you directly. We never touch your money — we earn a referral fee from the platforms, not from you.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '💸', title: 'No Fees Ever', desc: 'XCamModels is 100% free. You keep every dollar the platforms pay you.', link: null },
                { icon: '⚡', title: 'One Application', desc: 'Fill out one form and we get you set up across all the platforms you choose.', link: null },
                { icon: '📅', title: 'Daily Payouts', desc: 'Every platform we work with pays out daily via Paxum, bank transfer, or crypto.', link: null },
                { icon: '🔒', title: 'Full Privacy', desc: 'Your real name is never public. We show you exactly how to stay anonymous.', link: null },
                { icon: '🎧', title: 'Real Support', desc: 'Actual humans answer your setup questions — not bots, not ticketing queues.', link: null },
                { icon: '📖', title: 'Free Guide', desc: 'New to this? Read our step-by-step guide built for complete beginners.', link: '/guide' },
              ].map(({ icon, title, desc, link }) => {
                const inner = (
                  <>
                    <div className="text-2xl mb-4">{icon}</div>
                    <h3 className="font-display font-bold text-base mb-2 text-white flex items-center gap-2">
                      {title}
                      {link && <span className="text-pink-500 text-xs">→</span>}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </>
                );
                return link ? (
                  <a key={title} href={link} className="glass rounded-2xl p-6 card-hover border border-white/5 block">
                    {inner}
                  </a>
                ) : (
                  <div key={title} className="glass rounded-2xl p-6 card-hover border border-white/5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(168,85,247,0.025)' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={testimonialsRef} className="fade-up">
            <div className="text-center mb-14">
              <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Real Stories</p>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Heard From <span className="gradient-text">Our Models</span></h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {TESTIMONIALS.map(({ name, platform, quote, earnings, breakdown, stars }) => (
                <div key={name} className="glass rounded-3xl p-7 card-hover border border-white/5 flex flex-col gap-4">
                  <div className="flex gap-0.5">{Array(stars).fill(0).map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}</div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-semibold text-white text-sm">{name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{platform}</p>
                    <p className="text-xs font-semibold mt-1.5" style={{ color: '#ff69b4' }}>{earnings}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{breakdown}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6" style={{ background: 'rgba(255,20,147,0.025)' }}>
        <div className="max-w-3xl mx-auto">
          <div ref={faqRef} className="fade-up">
            <div className="text-center mb-14">
              <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-3">Questions</p>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold">Got <span className="gradient-text">Questions?</span></h2>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }, i) => (
                <div key={q} className="glass rounded-2xl overflow-hidden border border-white/5 card-hover">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center">
                    <span>{q}</span>
                    <span className="text-pink-500 ml-4 flex-shrink-0 transition-transform duration-300" style={{ display: 'inline-block', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                  </button>
                  <div className="overflow-hidden" style={{ maxHeight: openFaq === i ? '200px' : '0px', transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)' }}>
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section id="apply" className="py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,20,147,0.12) 0%, transparent 70%)' }} />
        <div ref={ctaRef} className="fade-up relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">Ready to <span className="neon-text">Start Earning?</span></h2>
          <p className="text-gray-400 mb-8 text-lg">Free to join. No fees ever. The platforms pay you directly — every single day.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {PLATFORMS.map(({ abbr, color }) => (
              <span key={abbr} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: `${color}18`, border: `1px solid ${color}44`, color }}>{abbr}</span>
            ))}
          </div>
          <a href="/register" className="inline-block px-10 py-5 rounded-full text-white text-xl font-bold shimmer-btn">Apply as a Model</a>
          <p className="text-gray-600 text-sm mt-6">All genders welcome · Must be 18+ · Government ID required · Response within 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 text-sm text-gray-600">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-display font-bold text-white text-base">XCamModels.com</span>
          <div className="flex flex-wrap justify-center gap-5">
            {[['/18usc2257','18 USC 2257'],['/privacy','Privacy Policy'],['/terms','Terms of Service'],['/disclaimer','Disclaimer'],['/anti-trafficking','Anti-Trafficking'],['https://twitter.com/xcammodels','Twitter']].map(([href,label]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-700 text-xs mt-6">© {new Date().getFullYear()} XCamModels.com · All rights reserved · All models are 18+</p>
      </footer>
    </div>
  );
}
