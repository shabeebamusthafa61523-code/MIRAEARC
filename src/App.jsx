import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Copy, ExternalLink, ArrowRight, Sparkles, Building2, Compass, Hammer } from 'lucide-react';
import NotifyModal from './components/NotifyModal';
import Toast from './components/Toast';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [progress, setProgress] = useState(82);

  const emailAddress = "miraearcstudio@gmail.com";
  const instagramHandle = "mirae_arcstudio";
  const instagramUrl = "https://instagram.com/mirae_arcstudio";
  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  // Subtle animated progress tick
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 96 ? 82 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4500);
  };

  // Robust email handler: copies email AND opens Gmail / mail app
  const handleEmailAction = (e) => {
    if (e) e.preventDefault();
    
    // Copy email to clipboard
    try {
      navigator.clipboard.writeText(emailAddress);
    } catch (err) {
      console.error(err);
    }

    // Try opening Gmail Web Compose in new tab first (universal fallback for browsers)
    const opened = window.open(gmailWebComposeUrl, '_blank', 'noopener,noreferrer');
    
    // Also trigger standard mailto for native clients
    if (!opened) {
      window.location.href = `mailto:${emailAddress}`;
    }

    showToast("Copied miraearcstudio@gmail.com to clipboard & opened mail composer!", "success");
  };

  const handleCopyOnly = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    showToast("Email copied: miraearcstudio@gmail.com", "success");
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between architectural-grid-light bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white relative">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 pt-5 pb-1 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-slate-600 uppercase font-semibold">
            MIRAE arc studio • Official Site
          </span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white/90 hover:bg-white text-xs font-semibold text-slate-800 transition-all shadow-sm hover:shadow cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          Get In Touch
        </button>
      </header>

      {/* Main Single-Screen Poster Container */}
      <main className="w-full max-w-4xl mx-auto px-6 z-10 flex flex-col items-center text-center my-auto py-1">
        
        {/* Brand Logo Card */}
        <div className="w-full max-w-xl p-4 md:p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/60 mb-4">
          <img
            src="/logo.png"
            alt="MIRAE arc studio by PMR INFRA LLP"
            className="w-full h-auto max-h-[100px] md:max-h-[125px] object-contain mx-auto"
          />
        </div>

        {/* Animated Architectural Loader Badge */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-orange-200 border-t-orange-500 animate-spin" />
            <Compass className="w-4 h-4 text-orange-600 absolute" />
          </div>
          <span className="px-3.5 py-1 rounded-full border border-orange-200 bg-orange-50/90 text-orange-700 text-xs font-mono tracking-widest uppercase font-semibold shadow-xs">
            Site Under Construction
          </span>
        </div>

        {/* Big Prominent COMING SOON Banner */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-orange-600 max-w-3xl leading-tight mb-2 uppercase">
          COMING SOON
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-lg font-normal leading-relaxed mb-4">
          We are crafting a new architectural digital experience for <strong className="text-slate-900">MIRAE arc studio</strong> by <span className="text-slate-900 font-semibold">PMR INFRA LLP</span>.
        </p>

        {/* Animated Architectural Progress Bar */}
        <div className="w-full max-w-md bg-white/80 border border-slate-200 rounded-xl p-3 shadow-xs mb-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-1.5 px-1">
            <span className="flex items-center gap-1">
              <Hammer className="w-3.5 h-3.5 text-orange-500 animate-bounce" /> Constructing Digital Studio
            </span>
            <span className="font-bold text-orange-600">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 relative">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Clickable Social & Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl mb-4">
          
          {/* Email Card - Universal Email Action */}
          <div
            onClick={handleEmailAction}
            className="group bg-white/90 hover:bg-white p-3.5 sm:p-4 rounded-xl flex flex-col justify-between text-left cursor-pointer border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-400 transition-all block"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleCopyOnly}
                  title="Copy email address"
                  className="p-1.5 rounded-md bg-slate-100 hover:bg-orange-500 text-slate-600 hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <span className="p-1.5 rounded-md bg-slate-100 text-slate-400 group-hover:text-orange-600 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Official Email</span>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors mt-0.5 break-all">
                {emailAddress}
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                Click to send email / copy <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-orange-500" />
              </p>
            </div>
          </div>

          {/* Instagram Card */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/90 hover:bg-white p-3.5 sm:p-4 rounded-xl flex flex-col justify-between text-left cursor-pointer border border-slate-200 shadow-xs hover:shadow-md hover:border-rose-400 transition-all block"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="p-1.5 rounded-lg bg-slate-100 text-slate-400 group-hover:text-rose-600 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Instagram Portfolio</span>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-rose-600 transition-colors mt-0.5">
                @{instagramHandle}
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                Follow our works <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-rose-500" />
              </p>
            </div>
          </a>

        </div>

        {/* Action Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 group cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Get In Touch / Contact Studio
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-3 border-t border-slate-200/70 z-10 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
        <div>
          © {new Date().getFullYear()} <strong className="text-slate-800">MIRAE arc studio</strong>. All rights reserved.
        </div>
        <div>
          by <strong className="text-slate-900">PMR INFRA LLP</strong>
        </div>
      </footer>

      {/* Modal & Toast */}
      <NotifyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onShowToast={showToast}
      />

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
