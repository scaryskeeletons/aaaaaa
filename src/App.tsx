import React, { useState } from 'react';
import {
  Rocket,
  Copy,
  ExternalLink,
  Twitter,
  Send,
  Moon,
  Info,
  Coins,
  LineChart,
  Lock,
  Users,
  Star,
} from 'lucide-react';
import { TokenCard } from './components/TokenCard';
import { useParallax } from './hooks/useParallax';
import { Disclaimer } from './components/Disclaimer';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';

export function App() {
  const [copied, setCopied] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const CONTRACT_ADDRESS = 'ZACKAW4BUW247g2DtwXmE636FoZaeAXxfgjXmEi9nMN';

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
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-purple-900/40 to-blue-900/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-cover bg-center opacity-15 mix-blend-color-dodge" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(147,197,253,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent_10%,transparent_90%,black)]" />
      </div>

      {/* Floating Stars */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Star size={16} className="text-blue-200" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="pt-20 pb-16 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="relative mb-8 inline-block group">
              <div className="absolute inset-0 blur-2xl bg-blue-500/30 rounded-full scale-150 group-hover:scale-175 transition-transform duration-700" />
              <Moon
                size={120}
                className="animate-pulse text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] relative transform group-hover:scale-110 transition-transform duration-700"
              />
              <Rocket
                className="absolute -top-4 -right-4 text-purple-400 animate-bounce-slow"
                size={40}
              />
            </div>
            <h1 className="text-7xl md:text-9xl font-bold mb-6 font-display tracking-wider drop-shadow-[0_0_25px_rgba(96,165,250,0.3)] hover:scale-105 transition-transform duration-700">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                $MZACK
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 font-mono max-w-2xl mx-auto hover:scale-105 transition-transform duration-500">
              Zack Morris is Taking Us To The Moon 🚀
            </p>

            {/* Buy Now Button */}
            <a
              href="https://pump.fun/ZACKAW4BUW247g2DtwXmE636FoZaeAXxfgjXmEi9nMN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-12 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]"
            >
              Buy Now on Pump.Fun
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mb-12">
              <a
                href="https://x.com/intent/post?text=+%24MZACK+TO+THE+MOON+%F0%9F%8C%95"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Twitter
                  size={32}
                  className="relative text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://t.me/moonzacksol"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-purple-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Send
                  size={32}
                  className="relative text-purple-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://pump.fun/ZACKAW4BUW247g2DtwXmE636FoZaeAXxfgjXmEi9nMN"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ExternalLink
                  size={32}
                  className="relative text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transform hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Contract Address */}
            <div
              className="inline-flex items-center bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full px-3 sm:px-6 py-3 backdrop-blur-sm hover:from-blue-800/40 hover:to-purple-800/40 transition-all cursor-pointer shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] max-w-full overflow-hidden"
              onClick={copyAddress}
            >
              <code className="text-xs sm:text-sm md:text-base mr-3 font-mono text-blue-200 truncate">
                {CONTRACT_ADDRESS}
              </code>
              {copied ? (
                <span className="text-green-400 text-xs sm:text-sm font-mono shrink-0">
                  Copied! 🌙
                </span>
              ) : (
                <Copy size={16} className="text-blue-300 shrink-0" />
              )}
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <TokenCard
              title="The Ride"
              description="Take a break from Earth's gravity and join us on our lunar journey"
              gradient="from-blue-500 to-purple-500"
              icon="🌙"
            />
            <TokenCard
              title="The Squad"
              description="Join our elite community of moonbound astronauts"
              gradient="from-purple-500 to-indigo-500"
              icon="👨‍🚀"
            />
            <TokenCard
              title="The Security"
              description="Liquidity locked tighter than Zack's perfectly styled hair"
              gradient="from-indigo-500 to-blue-500"
              icon="🔒"
            />
            <TokenCard
              title="The Magic"
              description="Community-powered momentum to break Earth's atmosphere"
              gradient="from-blue-400 to-purple-400"
              icon="✨"
            />
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center font-display bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
              Tokenomics
            </h2>
            <Tokenomics />
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center font-display bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
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
            <Info size={16} className="text-blue-300" />
            <span className="text-sm text-blue-200 font-mono">
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