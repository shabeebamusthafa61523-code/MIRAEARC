import React, { useState } from 'react';
import { X, Send, Mail, User, MessageSquare, Loader2 } from 'lucide-react';

export default function NotifyModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: formData.message ? 'inquiry' : 'notify'
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onShowToast(data.message || 'Thank you! We will notify you upon launch.', 'success');
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        onShowToast(data.message || 'Something went wrong. Please try again.', 'error');
      }
    } catch (err) {
      console.error(err);
      onShowToast('Request submitted! We will reach out shortly.', 'success');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full border border-orange-200 mb-2">
            Get In Touch
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">Be The First To Know</h3>
          <p className="text-xs text-slate-500 mt-1">
            Leave your details and the team at <strong className="text-slate-800">MIRAE arc studio</strong> will get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name (Optional)</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address <span className="text-orange-500">*</span></label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="miraearcstudio@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Message (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <textarea
                rows="3"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-slate-400 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium text-sm hover:from-black hover:to-slate-900 focus:ring-2 focus:ring-slate-900/20 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
