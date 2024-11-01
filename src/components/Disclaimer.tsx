import React from 'react';
import { X } from 'lucide-react';

interface DisclaimerProps {
  onClose: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-200 to-yellow-200 text-transparent bg-clip-text font-display">
          Disclaimer
        </h3>
        <p className="text-gray-300 font-mono leading-relaxed">
          $MUERTO is a meme token created for entertainment purposes only. It has no intrinsic value and should not be considered as a financial investment. Always do your own research and never invest more than you can afford to lose.
        </p>
      </div>
    </div>
  );
};