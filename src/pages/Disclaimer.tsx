import Logo from '../components/Logo';

export default function Disclaimer() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-block mb-10"><Logo size="md" /></a>
        <h1 className="text-4xl font-display font-extrabold mb-2 text-white">Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Adult Content</h2>
            <p>XCamModels.com is an adult platform intended for individuals 18 years of age or older. By accessing this site you confirm that you are at least 18 years old (or the age of majority in your jurisdiction, whichever is greater) and that viewing adult-oriented content is legal in your jurisdiction.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Earnings Disclaimer</h2>
            <p>Income figures shown on this website (e.g. "$4,200 this week") are illustrative examples based on top-performing models and are not guarantees of earnings. Individual results vary widely based on time invested, platform, audience, and other factors. There is no guarantee that any model will earn any specific amount.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Affiliate &amp; Partner Relationships</h2>
            <p>XCamModels.com has affiliate relationships with the cam platforms listed on this site. We may receive compensation when you sign up for or use those platforms through our referral links. This compensation does not affect our editorial recommendations.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">No Employment Relationship</h2>
            <p>Models who register through XCamModels.com are independent contractors, not employees. XCamModels.com does not control the hours, content, or working conditions of any model. Models are solely responsible for their own taxes, compliance with local laws, and any obligations to the platforms they use.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Third-Party Platforms</h2>
            <p>XCamModels.com links to and works with third-party cam platforms. We are not responsible for the content, policies, or practices of those platforms. Each platform has its own terms of service, privacy policy, and payout structure which you should review independently.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">No Legal or Financial Advice</h2>
            <p>Nothing on this website constitutes legal, financial, tax, or professional advice. You should consult qualified professionals before making decisions based on information found on this site.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Accuracy of Information</h2>
            <p>We strive to keep information on this site current and accurate, but we make no warranties as to completeness, accuracy, or fitness for a particular purpose. Platform terms, payout rates, and features may change without notice.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>Questions about this disclaimer? Email us at <span className="text-pink-400">legal@xcammodels.com</span>.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <a href="/" className="text-pink-400 hover:underline text-sm">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
