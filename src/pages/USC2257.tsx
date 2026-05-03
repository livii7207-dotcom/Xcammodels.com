import Logo from '../components/Logo';

export default function USC2257() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ backgroundColor: '#07080f', color: '#e5e7eb' }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-block mb-10"><Logo size="md" /></a>
        <h1 className="text-4xl font-display font-extrabold mb-2 text-white">18 U.S.C. § 2257 Statement</h1>
        <p className="text-gray-500 text-sm">Records Keeping Requirements Compliance Statement</p>
        <p className="text-gray-600 text-xs mb-10">Last Updated: January 1, 2025</p>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            XCamModels.com is not a producer (primary or secondary) of any sexually explicit content as defined in 18 U.S.C. § 2257. XCamModels.com is an intermediary platform that connects models with third-party cam platforms and content sites.
          </p>
          <p>
            All content displayed on or linked from this website is produced by, and all records required by 18 U.S.C. § 2257 and 28 C.F.R. § 75 are maintained by, the respective third-party platforms on which such content appears. Please refer to the 2257 compliance statements of those individual platforms for records-keeping information.
          </p>
          <p>
            All persons depicted in visual content featured on this website were at least 18 years of age at the time of production. XCamModels.com verifies the age of all registered models through government-issued identification prior to account activation.
          </p>
          <p>
            The custodian of records for XCamModels.com may be contacted at:
          </p>
          <div className="glass rounded-2xl p-6 border border-white/5">
            <p className="text-white font-medium">XCamModels.com</p>
            <p>Custodian of Records</p>
            <p>legal@xcammodels.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <a href="/" className="text-pink-400 hover:underline text-sm">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
