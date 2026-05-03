import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified !== 'true') setShow(true);
  }, []);

  const handleYes = () => {
    localStorage.setItem('ageVerified', 'true');
    setShow(false);
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-pink-500/40 rope-light" style={{ boxShadow: '0 0 40px rgba(255,20,147,0.3)' }}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-pink-500 neon-text">AGE VERIFICATION</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 mx-auto rounded-full" />
          </div>
          <p className="text-center text-gray-200 text-lg mb-6 leading-relaxed">
            You must be <span className="font-bold text-pink-400">18 years of age or older</span> to enter this site.
          </p>
          <p className="text-center text-gray-400 text-sm mb-10">
            By clicking &quot;Yes, I am 18+&quot;, you confirm you are of legal age and agree to our terms.
          </p>
          <div className="flex flex-col gap-4">
            <button onClick={handleYes} className="w-full py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider text-white" style={{ background: 'linear-gradient(135deg, #ff1493, #dc143c)', boxShadow: '0 0 20px rgba(255,20,147,0.5)' }}>
              Yes, I am 18+
            </button>
            <button onClick={handleNo} className="w-full py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-wider border border-pink-500/50 text-pink-400 bg-black/30">
              No, Exit Site
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">This site contains adult content and is not intended for minors.</p>
        </div>
      </div>
    </div>
  );
}
