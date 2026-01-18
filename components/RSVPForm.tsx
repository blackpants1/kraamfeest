
import React, { useState } from 'react';
import { Daisy } from './Daisy';

interface RSVPFormProps {
  onSuccess: () => void;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      await fetch('https://n8n.clickwave.nl/webhook/kraamfeest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          adults,
          children
        })
      });

      setIsSubmitted(true);
      onSuccess();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setIsSubmitted(true);
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
        <Daisy size={60} className="mb-4" />
        <h3 className="text-3xl font-sacramento text-[#c9a227]">Hoera!</h3>
        <p className="text-xl font-semibold">We hebben jullie aanmelding ontvangen 🌼</p>
        <p className="text-[#8a7b6a]">Tot de 18e!</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm underline opacity-50 hover:opacity-100"
        >
          Nog iemand aanmelden?
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold uppercase tracking-widest text-[#8a7b6a]">Jullie naam</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Bijv. Familie Jansen"
          required
          className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/50 focus:border-[#c9a227] focus:outline-none transition-all placeholder:text-[#8a7b6a]/50 text-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold uppercase tracking-widest text-[#8a7b6a]">E-mailadres</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          required
          className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/50 focus:border-[#c9a227] focus:outline-none transition-all placeholder:text-[#8a7b6a]/50 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NumberInput
          label="Volwassenen"
          value={adults}
          onChange={setAdults}
          min={1}
        />
        <NumberInput
          label="Kinderen"
          value={children}
          onChange={setChildren}
          min={0}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 py-5 bg-[#c9a227] text-white rounded-full text-xl font-bold shadow-lg hover:bg-[#b8911f] hover:shadow-xl transform hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Even geduld...' : 'Ja, wij komen! 🌼'}
      </button>
    </form>
  );
};

const NumberInput: React.FC<{
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}> = ({ label, value, onChange, min = 0 }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold uppercase tracking-widest text-[#8a7b6a]">{label}</label>
      <div className="flex items-center bg-white/50 rounded-2xl border-2 border-white overflow-hidden p-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-12 h-12 flex items-center justify-center text-2xl font-bold text-[#c9a227] hover:bg-white rounded-xl transition-colors"
        >
          -
        </button>
        <div className="flex-1 text-center text-xl font-bold flex items-center justify-center gap-2">
          {value}
          <Daisy size={14} className="opacity-30" />
        </div>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-12 h-12 flex items-center justify-center text-2xl font-bold text-[#c9a227] hover:bg-white rounded-xl transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
