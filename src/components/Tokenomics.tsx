import React from 'react';
import { Coins, Factory, LineChart, Lock, RocketIcon, Users } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  const stats = [
    {
      title: 'Total Supply',
      value: '1,000,000,000',
      icon: <Coins className="text-blue-400" size={24} />,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Tax',
      value: '0%',
      icon: <LineChart className="text-purple-400" size={24} />,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Liquidity',
      value: 'Locked',
      icon: <Lock className="text-indigo-400" size={24} />,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Launch',
      value: 'Fair Launch',
      icon: <RocketIcon className="text-blue-400" size={24} />,
      gradient: 'from-blue-400 to-purple-400'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <h3 className="text-lg text-gray-300 font-mono">{stat.title}</h3>
            </div>
            <p className="text-3xl font-bold font-display bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};