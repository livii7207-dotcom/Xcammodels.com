import Logo from '../components/Logo';

export default function AntiTrafficking() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-block mb-10"><Logo size="md" /></a>
        <h1 className="text-4xl font-display font-extrabold mb-2 text-white">Anti-Trafficking Policy</h1>
        <p className="text-gray-500 text-sm">Zero tolerance for human trafficking and exploitation</p>
        <p className="text-gray-600 text-xs mb-10">Last Updated: January 1, 2025</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Our Commitment</h2>
            <p>XCamModels.com has a zero-tolerance policy toward human trafficking, sexual exploitation, and coercion in any form. All participation on our platform is strictly voluntary. Every model must independently consent to registration and may withdraw at any time without consequence.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Age Verification</h2>
            <p>Every person who registers as a model on XCamModels.com is required to provide a valid government-issued photo ID confirming they are at least 18 years of age (19 in applicable jurisdictions). Accounts are not activated until verification is complete.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">No Coercion or Third-Party Control</h2>
            <p>Models on our platform must be acting of their own free will. We do not permit third parties to register, control, or manage models' accounts on their behalf. If we become aware of any coercion, exploitation, or trafficking, the account is immediately suspended and reported to the appropriate authorities.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Reporting</h2>
            <p>If you suspect trafficking or exploitation involving our platform, or if you are a victim seeking help, please contact us immediately at <span className="text-pink-400">safety@xcammodels.com</span>.</p>
            <p className="mt-3">You may also contact the following resources:</p>
            <ul className="mt-3 space-y-2">
              <li><span className="text-white font-medium">National Human Trafficking Hotline (US):</span> 1-888-373-7888</li>
              <li><span className="text-white font-medium">Text line:</span> Text "HELP" to 233733</li>
              <li><span className="text-white font-medium">Online tip:</span> cybertipline.org</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">FOSTA-SESTA Compliance</h2>
            <p>XCamModels.com fully complies with the Fight Online Sex Trafficking Act (FOSTA) and Stop Enabling Sex Traffickers Act (SESTA). We actively monitor our platform and cooperate fully with law enforcement investigations.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <a href="/" className="text-pink-400 hover:underline text-sm">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
