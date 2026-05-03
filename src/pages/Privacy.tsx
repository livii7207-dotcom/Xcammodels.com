import Logo from '../components/Logo';

export default function Privacy() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-block mb-10"><Logo size="md" /></a>
        <h1 className="text-4xl font-display font-extrabold mb-2 text-white">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>

        {[
          ['1. Information We Collect', 'When you apply as a model we collect your stage name, real name (for ID verification only), email address, phone number (optional), date of birth, and country. We also collect standard server logs including IP address and browser type.'],
          ['2. How We Use Your Information', 'Your information is used solely to process your application, manage your account, and facilitate payments. We do not sell, rent, or share your personal data with third parties except as required by law or to operate the partner platforms you select.'],
          ['3. Identity Documents', 'Government-issued ID submitted for age verification is stored securely and encrypted. It is used only for compliance purposes and is never shared publicly or with advertisers.'],
          ['4. Cookies', 'We use essential cookies to maintain session state (e.g., age-gate verification). We do not use tracking or advertising cookies.'],
          ['5. Third-Party Services', 'This site uses Formspree to process application forms. Their privacy policy applies to data transmitted through their service. Partner cam platforms have their own privacy policies which govern data you submit to them directly.'],
          ['6. Data Retention', 'Application data is retained for as long as your account is active or as required by law. You may request deletion of your data at any time by contacting us.'],
          ['7. Your Rights', 'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. Contact us at privacy@xcammodels.com to exercise these rights.'],
          ['8. Security', 'We use industry-standard encryption and security practices to protect your data. However, no transmission over the internet is 100% secure.'],
          ['9. Changes', 'We may update this policy periodically. We will notify registered users of material changes via email.'],
          ['10. Contact', 'Privacy questions? Email privacy@xcammodels.com.'],
        ].map(([heading, body]) => (
          <div key={heading} className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">{heading}</h2>
            <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
          </div>
        ))}

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <a href="/" className="text-pink-400 hover:underline text-sm">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
