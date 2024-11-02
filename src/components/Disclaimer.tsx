import React from 'react';
import { X } from 'lucide-react';

interface DisclaimerProps {
  onClose: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="absolute inset-0 bg-black/70" 
        onClick={onClose}
      />
      <div className="relative max-w-lg w-full bg-gradient-to-b from-blue-900/90 to-purple-900/90 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(96,165,250,0.3)] transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-200 hover:text-white transition-colors hover:scale-110 duration-300"
        >
          <X size={20} />
        </button>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-display bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
            Disclaimer
          </h3>
          <div className="space-y-4">
            <p className="text-blue-100 font-mono leading-relaxed">
              $MZACK is a meme coin for entertainment purposes only. This token should not be considered as financial investment advice.
            </p>
            <p className="text-blue-100 font-mono leading-relaxed">
              The token name and theme are inspired by pop culture references and should be taken in a lighthearted spirit.
            </p>
            <p className="text-blue-100 font-mono leading-relaxed">
              Always do your own research and never invest more than you can afford to lose.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(96,165,250,0.3)]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};