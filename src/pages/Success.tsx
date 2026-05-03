import Logo from '../components/Logo';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <Logo size="md" />
        </div>
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white mb-4">Application Received!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Thanks for applying to XCamModels. Our team will review your application and reach out within 24 hours.
        </p>
        <div className="glass rounded-2xl p-6 border border-white/5 mb-10 text-left">
          <h2 className="text-white font-semibold mb-4">What happens next?</h2>
          <ul className="space-y-3">
            {[
              'We review your application (usually within a few hours)',
              'You receive an email with your onboarding link',
              'Complete ID verification on your chosen platform',
              'Go live and start earning'
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <span className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xs shrink-0">{i + 1}</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
        <a href="/" className="inline-block px-8 py-4 rounded-full text-white font-bold shimmer-btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}
