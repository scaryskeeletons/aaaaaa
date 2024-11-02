import React from 'react';
import { Rocket } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'The Time Out',
      items: [
        'Token Launch on PumpFun',
        'Website Launch',
        'Social Media Setup',
        'Moon Zack Community Building'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'The Prep Rally',
      items: [
        'CoinGecko Listing',
        'CoinMarketCap Listing',
        'Viral Marketing Campaign',
        'Community Events at The Max'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'The Big Game',
      items: [
        'CEX Listings',
        'Staking Platform',
        'Web3 Zack Attack App'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'The Graduation',
      items: [
        'Mobile App Development',
        'Strategic Partnerships',
        'To The Moon & Beyond'
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="text-blue-400" size={20} />
              <h3 className="text-xl font-bold font-display text-blue-200">
                {phase.phase}
              </h3>
            </div>
            <h4 className="text-2xl font-bold mb-4 font-display bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
              {phase.title}
            </h4>
            <ul className="space-y-2">
              {phase.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2 text-gray-300 font-mono"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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