import { useState } from 'react';
import Logo from '../components/Logo';

const PLATFORMS = ['Chaturbate','StripChat','Cam4','OnlyFans','IWantClips','ManyVids','LoyalFans','SkyPrivate'];
const EQUIPMENT = ['Webcam','Smartphone','DSLR / Camera','Ring Light','Green Screen'];
const COUNTRIES = ['United States','United Kingdom','Canada','Australia','Germany','France','Netherlands','Spain','Italy','Brazil','Mexico','Argentina','Colombia','Romania','Czech Republic','Hungary','Poland','Ukraine','Russia','South Africa','New Zealand','Sweden','Norway','Denmark','Finland','Belgium','Switzerland','Austria','Portugal','Greece','Turkey','Japan','South Korea','Philippines','Thailand','India','Pakistan','Indonesia','Malaysia','Singapore','Israel','UAE','Saudi Arabia','Egypt','Nigeria','Kenya','Ghana','Jamaica','Trinidad and Tobago','Puerto Rico','Dominican Republic','Venezuela','Chile','Peru','Ecuador','Bolivia','Paraguay','Uruguay','Costa Rica','Panama','Ireland','Scotland','Wales','Croatia','Serbia','Slovakia','Slovenia','Bulgaria','Latvia','Lithuania','Estonia','Iceland','Luxembourg','Malta','Cyprus','Albania','Other'];

function getMaxDob() {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 18);
  return d.toISOString().split('T')[0];
}
const MAX_DOB = getMaxDob();

const INITIAL = { stageName:'',realName:'',email:'',phone:'',dob:MAX_DOB,country:'',experience:'',hearAbout:'',platforms:[] as string[],equipment:[] as string[],message:'',age18:false,terms:false };

export default function Apply() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<string | null>(null);

  const set = (field: string, value: unknown) => setForm(prev => ({ ...prev, [field]: value }));
  const toggleList = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
      ? (prev[field as keyof typeof prev] as string[]).filter((v: string) => v !== value)
      : [...(prev[field as keyof typeof prev] as string[]), value] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const payload = { ...form, platforms: form.platforms.join(', '), equipment: form.equipment.join(', ') };
    try {
      const res = await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#07080f' }}>
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>✓</div>
          <h1 className="text-3xl font-display font-extrabold mb-3 gradient-text">Application Received!</h1>
          <p className="text-gray-400 mb-8">Thanks <strong className="text-white">{form.stageName || form.realName}</strong>! We&apos;ll review your application and get back to you within 24 hours.</p>
          <a href="/" className="inline-block px-8 py-3 rounded-full text-white font-semibold glow-btn" style={{ background: 'linear-gradient(135deg, #ff1493, #a855f7)' }}>Back to Home</a>
        </div>
      </div>
    );
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all';
  const inputStyle = { backgroundColor: '#0d0f1e', border: '1px solid #1e2240' };
  const labelCls = 'block text-sm font-medium text-gray-300 mb-1.5';

  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f' }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 rounded-full" style={{ background: 'radial-gradient(circle, #ff1493 0%, transparent 70%)' }} />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <a href="/" className="inline-block mb-8"><Logo size="md" /></a>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-3">Start <span className="neon-text">Earning Today</span></h1>
          <p className="text-gray-400">Free to join · No fees ever · Daily pay · Response within 24 hours</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl p-8 sm:p-10 space-y-6 rope-light" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="grid sm:grid-cols-2 gap-5">
            <div><label className={labelCls}>Stage Name <span className="text-pink-500">*</span></label><input type="text" required placeholder="e.g. Luna Rose" value={form.stageName} onChange={e => set('stageName', e.target.value)} className={inputCls} style={inputStyle} /></div>
            <div><label className={labelCls}>Real Name <span className="text-pink-500">*</span></label><input type="text" required placeholder="For ID verification only" value={form.realName} onChange={e => set('realName', e.target.value)} className={inputCls} style={inputStyle} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div><label className={labelCls}>Email Address <span className="text-pink-500">*</span></label><input type="email" required placeholder="you@email.com" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} style={inputStyle} /></div>
            <div><label className={labelCls}>Phone Number</label><input type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} className={inputCls} style={inputStyle} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div><label className={labelCls}>Date of Birth <span className="text-pink-500">*</span></label><input type="date" required max={MAX_DOB} value={form.dob} onChange={e => set('dob', e.target.value)} className={inputCls} style={{ ...inputStyle, colorScheme: 'dark' }} /><p className="text-gray-600 text-xs mt-1">Must be 18 or older</p></div>
            <div><label className={labelCls}>Country <span className="text-pink-500">*</span></label><select required value={form.country} onChange={e => set('country', e.target.value)} className={inputCls} style={{ ...inputStyle, color: form.country ? '#fff' : '#6b7280' }}><option value="" disabled>Select your country</option>{COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
          </div>
          <div><label className={labelCls}>Experience Level <span className="text-pink-500">*</span></label><select required value={form.experience} onChange={e => set('experience', e.target.value)} className={inputCls} style={{ ...inputStyle, color: form.experience ? '#fff' : '#6b7280' }}><option value="" disabled>Select your experience</option><option value="new">Brand new — no experience</option><option value="some">Some experience (under 6 months)</option><option value="experienced">Experienced (6+ months)</option><option value="professional">Professional / full-time</option></select></div>
          <div>
            <label className={labelCls}>Which platforms interest you?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PLATFORMS.map(p => (
                <label key={p} className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer text-sm transition-all" style={{ background: form.platforms.includes(p) ? 'rgba(255,20,147,0.2)' : 'rgba(255,255,255,0.03)', border: form.platforms.includes(p) ? '1px solid rgba(255,20,147,0.5)' : '1px solid rgba(255,255,255,0.07)', color: form.platforms.includes(p) ? '#ff69b4' : '#9ca3af' }}>
                  <input type="checkbox" className="hidden" checked={form.platforms.includes(p)} onChange={() => toggleList('platforms', p)} />
                  <span className="font-medium">{p}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className={labelCls}>Equipment you have</label>
            <div className="flex flex-wrap gap-2">
              {EQUIPMENT.map(eq => (
                <label key={eq} className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer text-sm transition-all" style={{ background: form.equipment.includes(eq) ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.03)', border: form.equipment.includes(eq) ? '1px solid rgba(168,85,247,0.5)' : '1px solid rgba(255,255,255,0.07)', color: form.equipment.includes(eq) ? '#c084fc' : '#9ca3af' }}>
                  <input type="checkbox" className="hidden" checked={form.equipment.includes(eq)} onChange={() => toggleList('equipment', eq)} />
                  {eq}
                </label>
              ))}
            </div>
          </div>
          <div><label className={labelCls}>How did you hear about us?</label><select value={form.hearAbout} onChange={e => set('hearAbout', e.target.value)} className={inputCls} style={{ ...inputStyle, color: form.hearAbout ? '#fff' : '#6b7280' }}><option value="">Select an option</option><option value="google">Google / Search</option><option value="social">Social Media</option><option value="friend">Friend / Referral</option><option value="ad">Advertisement</option><option value="other">Other</option></select></div>
          <div><label className={labelCls}>Anything else you&apos;d like us to know?</label><textarea rows={3} placeholder="Optional message..." value={form.message} onChange={e => set('message', e.target.value)} className={inputCls} style={{ ...inputStyle, resize: 'none' }} /></div>
          <div className="space-y-3 pt-2">
            {[['age18','I confirm I am 18 years of age or older (19+ if in Canada)'],['terms','']].map(([field]) => (
              <label key={field} className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input type="checkbox" className="sr-only" checked={form[field as keyof typeof form] as boolean} onChange={e => set(field, e.target.checked)} required />
                  <div className="w-5 h-5 rounded-md flex items-center justify-center transition-all" style={{ background: form[field as keyof typeof form] ? 'linear-gradient(135deg,#ff1493,#a855f7)' : 'transparent', border: form[field as keyof typeof form] ? 'none' : '2px solid #1e2240' }}>
                    {form[field as keyof typeof form] && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                </div>
                <span className="text-sm text-gray-400 leading-snug">
                  {field === 'age18' ? 'I confirm I am 18 years of age or older (19+ if in Canada)' : <span>I agree to the <a href="/terms" className="text-pink-400 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-pink-400 hover:underline">Privacy Policy</a></span>}
                </span>
              </label>
            ))}
          </div>
          {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or contact support.</p>}
          <button type="submit" disabled={status === 'loading'} className="w-full py-4 rounded-2xl text-white text-lg font-bold shimmer-btn transition-opacity disabled:opacity-50">
            {status === 'loading' ? 'Submitting…' : 'Submit Application →'}
          </button>
          <p className="text-center text-gray-600 text-xs">Your information is kept private and never shared. We respond within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}
