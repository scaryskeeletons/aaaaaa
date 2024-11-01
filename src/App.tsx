import React, { useState } from 'react';
import {
  Skull,
  Copy,
  ExternalLink,
  Twitter,
  Send,
  Flame,
  Info,
  Coins,
  LineChart,
  Lock,
  Users,
  Rocket,
} from 'lucide-react';
import { TokenCard } from './components/TokenCard';
import { useParallax } from './hooks/useParallax';
import { Disclaimer } from './components/Disclaimer';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';

export function App() {
  const [copied, setCopied] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const CONTRACT_ADDRESS = 'dotdRrN4PkyTwSGYj53cinbAJv9dCCWqTxZaKhNcQM2';

  useParallax();

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/40 via-red-900/40 to-yellow-900/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509740465752-41e3e4beddb4?q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-color-dodge" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,99,71,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent_10%,transparent_90%,black)]" />
      </div>

      {/* Floating Skulls */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Skull size={32} className="text-white" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="pt-20 pb-16 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="relative mb-8 inline-block group">
              <div className="absolute inset-0 blur-2xl bg-red-500/30 rounded-full scale-150 group-hover:scale-175 transition-transform duration-700" />
              <Skull
                size={120}
                className="animate-pulse text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] relative transform group-hover:scale-110 transition-transform duration-700"
              />
              <Flame
                className="absolute -top-4 -right-4 text-orange-500 animate-bounce-slow"
                size={40}
              />
            </div>
            <h1 className="text-7xl md:text-9xl font-bold mb-6 font-display tracking-wider drop-shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:scale-105 transition-transform duration-700">
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
                $MUERTO
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200 font-mono max-w-2xl mx-auto hover:scale-105 transition-transform duration-500">
              Where Crypto Meets the Eternal Fiesta
            </p>

            {/* Buy Now Button */}
            <a
              href="https://pump.fun/dotdRrN4PkyTwSGYj53cinbAJv9dCCWqTxZaKhNcQM2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-12 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
            >
              Buy Now on Pump.Fun
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mb-12">
              <a
                href="https://x.com/intent/post?text=+%24MUERTO+Day+of+the+Dead"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-red-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Twitter
                  size={32}
                  className="relative text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://t.me/muertosol"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-orange-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Send
                  size={32}
                  className="relative text-orange-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://pump.fun/dotdRrN4PkyTwSGYj53cinbAJv9dCCWqTxZaKhNcQM2"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-yellow-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ExternalLink
                  size={32}
                  className="relative text-yellow-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Contract Address */}
            <div
              className="inline-flex items-center bg-gradient-to-r from-purple-900/40 to-red-900/40 rounded-full px-6 py-3 backdrop-blur-sm hover:from-purple-800/40 hover:to-red-800/40 transition-all cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              onClick={copyAddress}
            >
              <code className="text-sm md:text-base mr-3 font-mono text-orange-200">
                {CONTRACT_ADDRESS}
              </code>
              {copied ? (
                <span className="text-green-400 text-sm font-mono">
                  ¡Copiado!
                </span>
              ) : (
                <Copy size={16} className="text-orange-300" />
              )}
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <TokenCard
              title="La Ofrenda"
              description="The opportunity for success is offered to all traders living and dead"
              gradient="from-fuchsia-500 to-red-500"
              icon="🔥"
            />
            <TokenCard
              title="El Carnaval"
              description="Join our vibrant community of eternal holders and celebrate together"
              gradient="from-red-500 to-orange-500"
              icon="💃"
            />
            <TokenCard
              title="La Promesa"
              description="Liquidity locked for eternity, ensuring your safe passage to wealth"
              gradient="from-orange-500 to-yellow-500"
              icon="🔒"
            />
            <TokenCard
              title="El Destino"
              description="Community-driven governance for a future written in the stars"
              gradient="from-yellow-500 to-fuchsia-500"
              icon="⭐"
            />
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center font-display bg-gradient-to-r from-orange-200 to-yellow-200 text-transparent bg-clip-text">
              Tokenomics
            </h2>
            <Tokenomics />
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center font-display bg-gradient-to-r from-orange-200 to-yellow-200 text-transparent bg-clip-text">
              Roadmap
            </h2>
            <Roadmap />
          </div>
        </section>

        {/* Disclaimer */}
        <footer className="fixed bottom-4 left-0 right-0 flex justify-center z-20">
          <button
            onClick={() => setShowDisclaimer(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm transition-colors"
          >
            <Info size={16} className="text-orange-300" />
            <span className="text-sm text-orange-200 font-mono">
              Disclaimer
            </span>
          </button>
        </footer>

        {/* Disclaimer Modal */}
        {showDisclaimer && (
          <Disclaimer onClose={() => setShowDisclaimer(false)} />
        )}
      </div>
    </div>
  );
}

export default App;