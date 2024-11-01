import React from 'react';
import { Rocket } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'La Génesis',
      items: [
        'Token Launch on Raydium',
        'Website Launch',
        'Social Media Setup',
        'Community Building'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'El Crecimiento',
      items: [
        'CoinGecko Listing',
        'CoinMarketCap Listing',
        'Marketing Campaigns',
        'Community Events'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'La Evolución',
      items: [
        'CEX Listings',
        'NFT Collection Launch',
        'Staking Platform',
        'Web3 App Integration'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'El Legado',
      items: [
        'Coin Bridge',
        'Mobile App Development',
        'Strategic Partnerships',
        '& more.'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {phases.map((phase, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="text-orange-400" size={20} />
              <h3 className="text-xl font-bold font-display text-orange-200">
                {phase.phase}
              </h3>
            </div>
            <h4 className="text-2xl font-bold mb-4 font-display bg-gradient-to-r from-orange-200 to-yellow-200 text-transparent bg-clip-text">
              {phase.title}
            </h4>
            <ul className="space-y-2">
              {phase.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2 text-gray-300 font-mono"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};