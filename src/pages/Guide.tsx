import { useState } from 'react';
import Logo from '../components/Logo';
import LogoPinup from '../components/LogoPinup';

const SECTIONS = [
  { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
  { id: 'choosing-a-platform', title: 'Choosing a Platform', icon: '💎' },
  { id: 'your-first-week', title: 'Your First Week', icon: '📈' },
  { id: 'getting-paid', title: 'Getting Paid', icon: '💰' },
  { id: 'privacy-safety', title: 'Privacy & Safety', icon: '🔒' },
  { id: 'growing-your-audience', title: 'Growing Your Audience', icon: '🔥' }
];

const PLATFORM_LINKS: Record<string, string> = {
  Chaturbate: 'https://chaturbate.com/in/?tour=5zjT&campaign=DddwF&track=default',
  OnlyFans: 'https://onlyfans.com?ref=40962198',
  Stripchat: 'https://stripchat.com/affiliates',
  Cam4: 'https://cam4.com/',
  ManyVids: 'https://manyvids.com/',
  IWantClips: 'https://iwantclips.com/',
  LoyalFans: 'https://loyalfans.com/',
  SkyPrivate: 'https://skyprivate.com/',
};

function PlatformLink({ name }: { name: string }) {
  return (
    <a href={PLATFORM_LINKS[name]} target="_blank" rel="noopener noreferrer"
      className="text-pink-400 hover:text-pink-300 font-semibold underline underline-offset-2">
      {name}
    </a>
  );
}

export default function Guide() {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
          <a href="/"><Logo size="md" /></a>
          <a href="/register" className="px-5 py-2 rounded-full text-white text-sm font-semibold shimmer-btn">Apply Now</a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              <div className="mb-8 hidden lg:block"><LogoPinup size="sm" showText={true} /></div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-3">Table of Contents</p>
              {SECTIONS.map(s => (
                <button key={s.id} onClick={() => { setActiveTab(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    activeTab === s.id ? 'bg-pink-500/10 text-pink-400 border border-pink-500/30 neon-border' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}>
                  <span>{s.icon}</span>{s.title}
                </button>
              ))}
              <div className="mt-10 p-6 rounded-2xl rope-light glass">
                <p className="text-sm font-bold text-white mb-2">Need help?</p>
                <p className="text-xs text-gray-400 mb-4">Our team is available 24/7 to help you get started.</p>
                <a href="/register" className="block text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors">Contact Support</a>
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4">
            <div className="mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-4 border border-pink-500/20">Beginner's Handbook 2026</span>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 text-white leading-tight">How to Become a <span className="neon-text">Cam Model</span> in 2026</h1>
              <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">The ultimate blueprint to starting your career. We cover equipment, platforms, earnings, and how to maintain 100% privacy while earning top dollar.</p>
            </div>

            <section id="getting-started" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl border border-pink-500/20">🚀</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Getting Started</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4">The Essentials</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">You don't need a studio. Most top earners started with just a smartphone and good lighting.</p>
                  <ul className="space-y-4">
                    {[{item:'Camera',desc:'iPhone 12+ or 1080p Webcam'},{item:'Lighting',desc:'Ring light or natural window light'},{item:'Internet',desc:'5Mbps+ upload (fast.com)'},{item:'Space',desc:'Clean, private background'}].map(t=>(
                      <li key={t.item} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        <span className="text-white font-semibold">{t.item}:</span>
                        <span className="text-gray-400">{t.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass p-8 rounded-3xl border border-white/5 neon-border">
                  <h3 className="text-xl font-bold text-white mb-4">Identity & Age</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Every platform requires legal verification. This is strictly for age compliance and is never shared.</p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                    <p className="text-xs font-bold text-white mb-1">REQUIRED DOCUMENTS:</p>
                    <p className="text-xs text-gray-400">Valid Passport, Driver's License, or National ID.</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">* You must be 18+ years old. No exceptions.</p>
                </div>
              </div>
            </section>

            <section id="choosing-a-platform" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl border border-purple-500/20">💎</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Choosing Your Platform</h2>
              </div>
              <div className="space-y-6">
                {[
                  {name:'Chaturbate',tag:'Most Traffic',desc:'The giant of the industry. Best for those who love live interaction and tip-based earning.',pros:['Instant audience','Daily payouts','High earning potential'],color:'#f47321'},
                  {name:'OnlyFans',tag:'Subscription Based',desc:'Perfect for building a loyal fan base with recurring monthly revenue and PPV content.',pros:['Stable income','Full content control','Private community'],color:'#00aff0'},
                  {name:'Stripchat',tag:'Global Reach',desc:'Excellent tech and a massive international audience. Great for diverse performers.',pros:['Mobile friendly','VR support','Great bonus system'],color:'#00b4a0'}
                ].map(p=>(
                  <div key={p.name} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{backgroundColor:p.color}}></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white"><PlatformLink name={p.name} /></h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/10 text-gray-300">{p.tag}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                        <div className="flex flex-wrap gap-4">
                          {p.pros.map(pro=>(<span key={pro} className="text-[11px] text-green-400 flex items-center gap-1.5"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>{pro}</span>))}
                        </div>
                      </div>
                      <a href="/register" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold transition-all text-center">Apply for {p.name}</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="your-first-week" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl border border-blue-500/20">📈</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Your First Week</h2>
              </div>
              <div className="space-y-6">
                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4">Day 1 Checklist</h3>
                  <ul className="space-y-4">
                    {[
                      {item:'Stage name',desc:'Choose something memorable — not your real name, ever'},
                      {item:'Profile photo',desc:'Bright, clear, face visible — no dark or blurry shots'},
                      {item:'Bio',desc:'One line: who you are, what you do, when you stream'},
                      {item:'Rate card',desc:'Set tip menu prices before going live (start low, raise as you grow)'},
                      {item:'Test stream',desc:'Do a 5-minute private test to check audio, lighting, frame'},
                    ].map(t=>(
                      <li key={t.item} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                        <span><span className="text-white font-semibold">{t.item}:</span> <span className="text-gray-400">{t.desc}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass p-8 rounded-3xl border border-white/5 neon-border">
                    <h3 className="text-xl font-bold text-white mb-4">First Stream Tips</h3>
                    <ul className="space-y-3">
                      {['Keep your first stream to 60–90 minutes — stamina builds over time','Greet every new viewer by name in chat',"Don't beg for tips — talk, engage, be entertaining",'End on time and announce your next scheduled stream'].map((tip,i)=>(
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400"><span className="text-pink-500 font-bold shrink-0">{i+1}.</span>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass p-8 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4">Realistic Expectations</h3>
                    <div className="space-y-4">
                      {[
                        {label:'Week 1',range:'$50 – $300',note:'Building audience, low token count is normal'},
                        {label:'Month 1',range:'$300 – $1,200',note:'Regulars start forming, tips increase'},
                        {label:'Month 3+',range:'$1,500+',note:'Consistent schedule pays off here'},
                      ].map(r=>(
                        <div key={r.label} className="flex items-start justify-between gap-4 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                          <span className="text-gray-500">{r.label}</span>
                          <div className="text-right"><p className="text-white font-semibold">{r.range}</p><p className="text-gray-600 text-xs">{r.note}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="getting-paid" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl border border-green-500/20">💰</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Getting Paid</h2>
              </div>
              <div className="rope-light rounded-3xl p-1">
                <div className="glass p-8 rounded-[calc(1.5rem-1px)]">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {stat:'Daily',label:'Frequency',desc:'Most of our partners offer daily payouts so you never wait for your money.'},
                      {stat:'100%',label:'Your Share',desc:'XCamModels is free. You keep every cent the platform pays you.'},
                      {stat:'Global',label:'Methods',desc:'Paxum, Crypto, Wire, or Check. Choose what works for you.'},
                    ].map((item,i)=>(
                      <div key={i} className={`text-center p-4 ${i===1?'border-y md:border-y-0 md:border-x border-white/10':''}`}>
                        <p className="text-3xl font-bold text-white mb-1">{item.stat}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                        <p className="mt-4 text-sm text-gray-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="privacy-safety" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl border border-pink-500/20">🔒</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Privacy &amp; Safety</h2>
              </div>
              <div className="space-y-6">
                <div className="glass p-8 rounded-3xl border border-white/5 neon-border">
                  <h3 className="text-xl font-bold text-white mb-6">Protecting Your Identity</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {icon:'👤',title:'Stage Name Rules',body:'Never use your real name, city, school, or employer in your username, bio, or on-camera. Pick a name with no personal meaning.'},
                      {icon:'🌍',title:'Geo-Blocking',body:'Every major platform lets you block specific countries or US states. Block your home region on day one — before your first stream.'},
                      {icon:'💻',title:'Device Hygiene',body:"Use a dedicated browser profile or device for streaming. Disable your camera's GPS metadata. Never log into personal accounts on your streaming device."},
                      {icon:'🖼️',title:'Watermark Your Content',body:'Add your stage name as a watermark to any photos or clips you sell. Free tools like Canva do this in 30 seconds. It helps with DMCA if content leaks.'},
                    ].map(c=>(<div key={c.title} className="flex gap-4"><span className="text-2xl shrink-0">{c.icon}</span><div><p className="text-white font-semibold text-sm mb-1">{c.title}</p><p className="text-gray-400 text-sm leading-relaxed">{c.body}</p></div></div>))}
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4">If Your Content Leaks</h3>
                  <ol className="space-y-4">
                    {['Screenshot the URL and document the infringing page immediately','File a DMCA takedown with the hosting site — most have a dedicated form','If the site is unresponsive, contact their hosting provider (use dmca.com or a copyright attorney)','Register your content on copyright.gov for stronger legal standing ($35 per batch)'].map((step,i)=>(
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xs shrink-0">{i+1}</span>
                        <span className="text-gray-400">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            <section id="growing-your-audience" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl border border-orange-500/20">🔥</div>
                <h2 className="text-3xl font-display font-extrabold text-white">Growing Your Audience</h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {icon:'📅',title:'Consistency Wins',body:'Stream the same days and times every week. Viewers build habits around your schedule — not their own impulses.'},
                    {icon:'🔁',title:'Cross-Platform Funnel',body:'Use free live streams to hook viewers, then convert them to paid subscribers on OnlyFans or ManyVids for stable monthly income.'},
                    {icon:'💬',title:'Engage Your Regulars',body:'Remember usernames. Use their names in chat. Give shout-outs to top tippers. Loyalty compounds faster than new viewers.'},
                  ].map(c=>(<div key={c.title} className="glass p-6 rounded-3xl border border-white/5 card-hover"><span className="text-3xl block mb-4">{c.icon}</span><h3 className="text-white font-bold mb-2">{c.title}</h3><p className="text-gray-400 text-sm leading-relaxed">{c.body}</p></div>))}
                </div>
                <div className="rope-light rounded-3xl p-1">
                  <div className="glass p-8 rounded-[calc(1.5rem-1px)]">
                    <h3 className="text-xl font-bold text-white mb-4">When to Raise Your Rates</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Your private show slots are consistently full',"You're turning down requests due to time",'Regulars are tipping above your menu prices',"You've been streaming consistently for 60+ days"].map((signal,i)=>(
                        <div key={i} className="flex items-center gap-3 text-sm"><span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span><span className="text-gray-300">{signal}</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-white/10 text-center relative overflow-hidden">
              <LogoPinup size="lg" />
              <h2 className="text-4xl font-display font-extrabold text-white mt-8 mb-4">Ready to start earning?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Join 5,000+ models who have launched their careers with XCamModels. Free setup, daily pay, and 24/7 support.</p>
              <a href="/register" className="inline-block px-10 py-5 rounded-full text-white text-xl font-bold shimmer-btn hover:scale-105 transition-transform">Apply Now — It's Free</a>
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-white/5 py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo size="sm" />
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/18usc2257" className="hover:text-white transition-colors">18 U.S.C. 2257</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 XCamModels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
