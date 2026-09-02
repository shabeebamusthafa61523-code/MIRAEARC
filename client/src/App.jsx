import React, { useState } from 'react';
import { Mail, Instagram, Copy, ArrowUpRight, Compass, Check } from 'lucide-react';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  const emailAddress = "miraearcstudio@gmail.com";
  const instagramHandle = "mirae_arcstudio";
  const instagramUrl = "https://instagram.com/mirae_arcstudio";
  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4500);
  };

  const handleEmailAction = (e) => {
    if (e) e.preventDefault();
    try {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error(err);
    }
    const opened = window.open(gmailWebComposeUrl, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = `mailto:${emailAddress}`;
    }
    showToast("Copied miraearcstudio@gmail.com & opened email composer!", "success");
  };

  const handleCopyOnly = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    showToast("Email copied: miraearcstudio@gmail.com", "success");
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between architectural-grid-light bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-orange-200/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-rose-200/20 rounded-full blur-[160px] pointer-events-none" />

      <header className="w-full max-w-6xl mx-auto px-6 pt-6 pb-2 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-slate-600 uppercase font-semibold">
            MIRAE arc studio • Official Site
          </span>
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 z-10 flex flex-col items-center text-center my-auto py-2">
        <div className="w-full max-w-xl p-5 md:p-6 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-6">
          <img
            src="/logo.png"
            alt="MIRAE arc studio by PMR INFRA LLP"
            className="w-full h-auto max-h-[115px] md:max-h-[140px] object-contain mx-auto"
          />
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-orange-200 border-t-orange-500 animate-spin" />
            <Compass className="w-4 h-4 text-orange-600 absolute" />
          </div>
          <span className="px-4 py-1.5 rounded-full border border-orange-200/90 bg-orange-50/90 text-orange-700 text-xs font-mono tracking-widest uppercase font-bold shadow-xs">
            Site Under Construction
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-orange-600 max-w-3xl leading-tight mb-3 uppercase">
          COMING SOON
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-lg font-normal leading-relaxed mb-8">
          We are crafting a new architectural digital experience for <strong className="text-slate-900">MIRAE arc studio</strong> by <span className="text-slate-900 font-semibold">PMR INFRA LLP</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl">
          <div
            onClick={handleEmailAction}
            className="group relative bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 p-5 sm:p-6 rounded-2xl flex flex-col justify-between text-left cursor-pointer border border-orange-200/70 shadow-sm hover:shadow-xl hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyOnly}
                  title="Copy Email Address"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-orange-400 hover:bg-orange-50 text-slate-700 hover:text-orange-600 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-600" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-orange-600 group-hover:border-orange-300 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider bg-orange-100/60 px-2 py-0.5 rounded-md border border-orange-200/50">
                  Official Email
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight break-all">
                {emailAddress}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1 font-medium">
                Click to send email directly
              </p>
            </div>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-white via-rose-50/30 to-purple-50/20 p-5 sm:p-6 rounded-2xl flex flex-col justify-between text-left cursor-pointer border border-rose-200/70 shadow-sm hover:shadow-xl hover:border-rose-400 hover:-translate-y-1 transition-all duration-300 block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 group-hover:border-rose-400 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-600 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs">
                  <span>Follow</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-wider bg-rose-100/60 px-2 py-0.5 rounded-md border border-rose-200/50">
                  Instagram Portfolio
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors tracking-tight">
                @{instagramHandle}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1 font-medium">
                View architectural design works
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer className="w-full max-w-6xl mx-auto px-6 py-4 border-t border-slate-200/70 z-10 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
        <div>
          © {new Date().getFullYear()} <strong className="text-slate-800">MIRAE arc studio</strong>. All rights reserved.
        </div>
        <div>
          by <strong className="text-slate-900">PMR INFRA LLP</strong>
        </div>
      </footer>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
