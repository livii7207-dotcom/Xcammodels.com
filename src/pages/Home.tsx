import { Link } from 'wouter'
import {
  DollarSign, Shield, Users, Zap, Clock, Headphones,
  ChevronDown, Star, TrendingUp, CheckCircle, ArrowRight
} from 'lucide-react'
import { useState } from 'react'

const stats = [
  { value: '2,400+', label: 'Active Models' },
  { value: '$4,200', label: 'Avg Monthly Earnings' },
  { value: '98%', label: 'Payout Rate' },
  { value: '24/7', label: 'Support Available' },
]

const steps = [
  {
    num: '01',
    title: 'Apply for Free',
    desc: 'Fill out our simple application. No experience needed — we welcome newcomers and veterans alike.',
  },
  {
    num: '02',
    title: 'Get Onboarded',
    desc: 'Our team walks you through everything: setup, branding, streaming tips, and maximizing tips.',
  },
  {
    num: '03',
    title: 'Start Earning',
    desc: 'Go live on Chaturbate with full studio support. Daily payouts, real coaching, real results.',
  },
]

const benefits = [
  { icon: DollarSign, title: 'Daily Payouts', desc: 'Get paid every single day, not once a month. Your earnings, your timeline.' },
  { icon: Users, title: 'Real Audience Building', desc: 'We promote your profile across platforms and help you grow a loyal fanbase fast.' },
  { icon: Shield, title: 'Privacy Protected', desc: 'Work under a stage name. We never share your real identity with anyone.' },
  { icon: Headphones, title: '24/7 Coaching', desc: 'Stuck? Have questions at 2am? Our team is always available to help you succeed.' },
  { icon: Zap, title: 'Fast Setup', desc: 'Be live and earning within 48 hours of approval. No delays, no red tape.' },
  { icon: TrendingUp, title: 'Proven Growth System', desc: 'Models who follow our system see earnings grow 3x within the first 90 days.' },
]

const testimonials = [
  { name: 'Alexa M.', since: 'Member since 2024', text: 'I was skeptical at first but the coaching completely changed my approach. I went from making $300/month to over $5,000 in just 3 months.', stars: 5 },
  { name: 'Destiny R.', since: 'Member since 2023', text: 'The daily payouts are a game changer. No other studio does this. XCamModels genuinely cares about its models.', stars: 5 },
  { name: 'Sophie K.', since: 'Member since 2024', text: 'I had zero experience and they walked me through everything. The support team is incredible — always there when I need them.', stars: 5 },
]

const faqs = [
  { q: 'Do I need experience to apply?', a: 'No experience is required! We accept both newcomers and experienced models. Our onboarding process is designed to get you comfortable and confident before you go live.' },
  { q: 'How much can I realistically earn?', a: 'Earnings vary based on hours worked and engagement, but models in our studio average $1,000–$10,000+/month. Top earners make $15,000+ per month. We provide coaching to help you maximize your income.' },
  { q: 'Is my identity kept private?', a: 'Absolutely. You choose your own stage name and we never share your personal information. You control your privacy at all times.' },
  { q: 'How do payouts work?', a: "We offer daily payouts via multiple methods including bank transfer, crypto, and more. There's no waiting period — money earned today is available tomorrow." },
  { q: 'What equipment do I need?', a: 'A computer or laptop, a decent webcam, and good lighting are the basics. We have a full guide and can recommend budget-friendly setups that work great on camera.' },
  { q: 'Is this only for Chaturbate?', a: 'We primarily work with Chaturbate, which is the world\'s largest cam platform, but we can also help you manage presence on other platforms to maximize your total earnings.' },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#3d4570] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#1a1f3a] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-white pr-4">{q}</span>
        <ChevronDown size={18} className={`text-[#ff1493] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#3d4570]">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1430] to-[#0a0e27] py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ff149320_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#1a1f3a] border border-[#3d4570] rounded-full px-4 py-1.5 text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            2,400+ models earning daily
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            Earn <span className="text-[#ff1493]">$1,000–$10,000+</span><br />
            Per Month as a Cam Model
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join XCamModels Studio and go live on Chaturbate with real coaching, real promotion, and daily payouts. Apply free — no experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="bg-[#ff1493] hover:bg-[#e0127e] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors flex items-center justify-center gap-2">
              Apply Free Today <ArrowRight size={20} />
            </Link>
            <a href="#how-it-works" className="border border-[#3d4570] hover:border-[#ff1493] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#3d4570] bg-[#1a1f3a]">
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-bold text-3xl text-[#ff1493]">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">How It Works</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Three simple steps from application to your first payout.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.num} className="bg-[#1a1f3a] border border-[#3d4570] rounded-2xl p-8">
              <div className="font-heading font-bold text-4xl text-[#ff1493] mb-4">{step.num}</div>
              <h3 className="font-heading font-semibold text-xl text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0f1430]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">Why Choose XCamModels</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything you need to build a thriving career on your terms.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-[#1a1f3a] border border-[#3d4570] rounded-2xl p-6 hover:border-[#ff1493] transition-colors group">
                <div className="w-12 h-12 bg-[#ff1493]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ff1493]/20 transition-colors">
                  <b.icon size={24} className="text-[#ff1493]" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">Real Models, Real Results</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Hear from models who transformed their income with XCamModels.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-[#1a1f3a] border border-[#3d4570] rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">{t.since}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#ff1493]/20 to-[#2d3561] mx-4 md:mx-8 rounded-3xl mb-4">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Apply today for free. Our team reviews applications within 24 hours and will have you set up and earning within 48 hours of approval.</p>
          <Link href="/apply" className="bg-[#ff1493] hover:bg-[#e0127e] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-2">
            Apply Now — It&apos;s Free <ArrowRight size={20} />
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-400">
            {['No experience needed', 'Daily payouts', 'Privacy protected', '24/7 support'].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Everything you need to know before applying.</p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
        </div>
      </section>
    </div>
  )
}
