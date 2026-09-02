import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900/95 text-white border border-gray-700/60 shadow-2xl backdrop-blur-md animate-bounce-short">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
      )}
      <span className="text-sm font-medium text-gray-200">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close message"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
