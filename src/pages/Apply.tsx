import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

type FormData = {
  name: string
  age: string
  email: string
  experience: string
  hours: string
  message: string
}

const initialData: FormData = {
  name: '',
  age: '',
  email: '',
  experience: '',
  hours: '',
  message: '',
}

export default function Apply() {
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-400" />
          </div>
          <h1 className="font-heading font-bold text-3xl text-white mb-3">Application Received!</h1>
          <p className="text-gray-400 mb-8">
            Thank you for applying. Our team will review your application and get back to you within 24 hours via email.
          </p>
          <a href="/" className="bg-[#ff1493] hover:bg-[#e0127e] text-white font-semibold px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2">
            Back to Home <ArrowRight size={18} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl text-white mb-3">Apply to Join</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Fill out the form below and our team will review your application within 24 hours. Approval is fast — you could be earning within 48 hours.
          </p>
        </div>

        <div className="bg-[#1a1f3a] border border-[#3d4570] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Stage Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Luna Rose"
                  className="w-full bg-[#0a0e27] border border-[#3d4570] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Age *</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="18"
                  max="99"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="Must be 18+"
                  className="w-full bg-[#0a0e27] border border-[#3d4570] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-[#0a0e27] border border-[#3d4570] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level *</label>
              <select
                name="experience"
                required
                value={form.experience}
                onChange={handleChange}
                className="w-full bg-[#0a0e27] border border-[#3d4570] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors appearance-none"
              >
                <option value="">Select your experience</option>
                <option value="none">No experience (complete beginner)</option>
                <option value="some">Some experience (streamed before)</option>
                <option value="experienced">Experienced (active on Chaturbate or other platforms)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hours Available Per Week *</label>
              <select
                name="hours"
                required
                value={form.hours}
                onChange={handleChange}
                className="w-full bg-[#0a0e27] border border-[#3d4570] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors appearance-none"
              >
                <option value="">Select availability</option>
                <option value="1-10">1–10 hours/week (part-time)</option>
                <option value="10-20">10–20 hours/week</option>
                <option value="20-30">20–30 hours/week</option>
                <option value="30+">30+ hours/week (full-time)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tell Us About Yourself</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Any questions, goals, or anything you'd like us to know..."
                className="w-full bg-[#0a0e27] border border-[#3d4570] text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff1493] transition-colors resize-none"
              />
            </div>

            <p className="text-xs text-gray-500">
              By submitting you confirm you are 18 years of age or older and agree to our terms. Your information is kept private and never shared.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#ff1493] hover:bg-[#e0127e] disabled:opacity-70 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : <><span>Submit Application</span> <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
