import React from 'react';

interface TokenCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: string;
}

export const TokenCard: React.FC<TokenCardProps> = ({ title, description, gradient, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      <div className="relative">
        <span className="text-4xl mb-4 block filter drop-shadow-glow">{icon}</span>
        <h3 className="text-3xl font-bold mb-4 font-display tracking-wide bg-gradient-to-r from-orange-200 to-yellow-200 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">
          {title}
        </h3>
        <p className="text-gray-300 text-lg font-mono">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};