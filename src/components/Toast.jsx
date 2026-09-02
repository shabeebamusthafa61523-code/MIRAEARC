import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-2xl backdrop-blur-md animate-bounce-short">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
      )}
      <span className="text-sm font-medium text-slate-100">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
