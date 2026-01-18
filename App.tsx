
import React, { useState } from 'react';
import { Daisy } from './components/Daisy';
import { FloatingDaisies } from './components/FloatingDaisies';
import { RSVPForm } from './components/RSVPForm';

const App: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRSVPSuccess = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const venueImages = [
    "https://beloofdeland.nl/wp-content/uploads/2024/10/ANITAFotografie_20240914_BeloofdeLand-243_websize-1-1024x683.jpg",
    "https://beloofdeland.nl/wp-content/uploads/2024/10/ANITAFotografie_20240914_BeloofdeLand-240_websize-1-1024x683.jpg",
    "https://brasseriedolcevita.nl/wp-content/uploads/2025/03/anitafotografie_20240914_beloofdeland-247.jpg",
    "https://brasseriedolcevita.nl/wp-content/uploads/2025/03/anitafotografie_20240914_beloofdeland-153-1024x683.jpg"
  ];

  return (
    <div className="min-h-screen relative selection:bg-[#c9a227]/30">
      {/* Background Decorative Elements */}
      <FloatingDaisies />

      {/* Confetti Animation Layer */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="daisy-petal-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `petalFall ${3 + Math.random() * 2}s linear forwards`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <Daisy size={20 + Math.random() * 20} rotation={Math.random() * 360} />
            </div>
          ))}
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-24 relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Hero Section */}
        <section className="text-center flex flex-col items-center">
          <div className="mb-6 animate-sway">
            <Daisy size={80} className="drop-shadow-sm" />
          </div>
          <p className="text-lg md:text-xl font-medium tracking-wide text-[#8a7b6a] mb-2">
            Jullie zijn uitgenodigd voor het
          </p>
          <h1 className="text-6xl md:text-8xl font-sacramento text-[#c9a227] leading-tight mb-2 drop-shadow-sm">
            Kraamfeest van Nova
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#6b5d4d]">
            & de 7e verjaardag van Joshua!
          </h2>
        </section>

        {/* Intro Text */}
        <section className="bg-[#e8e0d8]/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-sm border border-white/20">
          <p className="text-lg md:text-xl leading-relaxed italic">
            "Vol trots en blijdschap nodigen wij jullie uit om samen met ons te vieren dat onze kleine Nova er is, én dat Joshua 7 jaar is geworden!"
          </p>
        </section>

        {/* Event Details */}
        <section className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/40 p-6 rounded-2xl flex items-start gap-4 transition-transform hover:scale-[1.02] duration-300">
              <Daisy size={24} />
              <div>
                <h3 className="font-bold text-[#c9a227] uppercase tracking-wider text-sm mb-1">Datum</h3>
                <p className="text-lg">Zaterdag 18 april 2026</p>
              </div>
            </div>
            <div className="bg-white/40 p-6 rounded-2xl flex items-start gap-4 transition-transform hover:scale-[1.02] duration-300">
              <Daisy size={24} />
              <div>
                <h3 className="font-bold text-[#c9a227] uppercase tracking-wider text-sm mb-1">Tijd</h3>
                <p className="text-lg">14:00 - 17:00 uur</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/40 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 transition-transform hover:scale-[1.01] duration-300">
            <div className="flex gap-4 items-start w-full">
               <Daisy size={24} />
               <div className="flex-1">
                 <h3 className="font-bold text-[#c9a227] uppercase tracking-wider text-sm mb-1">Locatie</h3>
                 <p className="text-lg font-semibold">Brasserie La Dolce Vita</p>
                 <p className="text-md text-[#8a7b6a]">Apeldoornsestraat 32b, Voorthuizen</p>
               </div>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Brasserie+La+Dolce+Vita+Voorthuizen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-3 bg-[#c9a227] text-white rounded-full font-bold shadow-md hover:bg-[#b8911f] transition-all transform hover:scale-105 text-center whitespace-nowrap"
            >
              Route plannen
            </a>
          </div>

          {/* Venue Gallery */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {venueImages.map((src, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[3/2] overflow-hidden rounded-2xl shadow-sm border-2 border-white/50"
              >
                <img 
                  src={src} 
                  alt={`Venue view ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#c9a227]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* RSVP Form */}
        <section className="bg-[#e8e0d8] rounded-3xl p-8 md:p-12 shadow-lg border border-white/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
            <Daisy size={120} rotation={45} />
          </div>
          <h2 className="text-5xl font-sacramento text-[#c9a227] text-center mb-8">
            Komen jullie ook?
          </h2>
          <RSVPForm onSuccess={handleRSVPSuccess} />
        </section>

        {/* Gift Tip Section */}
        <section className="text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 w-full">
            <div className="h-[1px] bg-[#8a7b6a]/30 flex-1"></div>
            <div className="flex gap-2">
              <Daisy size={16} />
              <Daisy size={16} />
              <Daisy size={16} />
            </div>
            <div className="h-[1px] bg-[#8a7b6a]/30 flex-1"></div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Lief dat je aan een cadeautje denkt!</h3>
            <p className="text-[#8a7b6a]">Om dubbele cadeaus te voorkomen hebben we een verlanglijstje gemaakt</p>
          </div>
          
          <a 
            href="https://www.lijstje.nl/joshuaennova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#c9a227] text-[#c9a227] rounded-full font-bold hover:bg-[#c9a227] hover:text-white transition-all duration-300"
          >
            Bekijk het lijstje <span className="text-xl">→</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-[#8a7b6a]/20">
          <div className="flex justify-center gap-1 mb-4">
             <Daisy size={20} />
          </div>
          <p className="text-2xl font-sacramento text-[#c9a227] mb-2">
            Liefs, Roy, Laura, Joshua, Liam & Nova
          </p>
          <p className="text-[#8a7b6a] text-sm uppercase tracking-widest font-medium">
            van Bommelstraat 14, Voorthuizen
          </p>
        </footer>

      </main>

      {/* Floating corner daisies */}
      <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <Daisy size={250} rotation={15} />
      </div>
      <div className="fixed bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-20 pointer-events-none">
        <Daisy size={300} rotation={-20} />
      </div>
    </div>
  );
};

export default App;
