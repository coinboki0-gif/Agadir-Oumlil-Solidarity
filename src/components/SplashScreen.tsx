"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const SplashScreen = () => {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 100);
    const t2 = setTimeout(() => setPhase('out'), 2600);
    const t3 = setTimeout(() => setPhase('done'), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'hsl(191, 77%, 21%)',
        transform: phase === 'out' ? 'translateY(-100%)' : 'translateY(0)',
        transition: phase === 'out' ? 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      {/* Ripple rings */}
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${i * 220}px`,
            height: `${i * 220}px`,
            opacity: phase === 'hold' ? 1 : 0,
            transform: phase === 'hold' ? 'scale(1)' : 'scale(0.3)',
            transition: `all ${0.9 + i * 0.2}s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12}s`,
          }}
        />
      ))}

      {/* Golden glow blob behind logo */}
      <div
        className="absolute rounded-full"
        style={{
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 70%)',
          opacity: phase === 'hold' ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      />

      {/* Logo */}
      <div
        style={{
          opacity: phase === 'hold' ? 1 : 0,
          transform: phase === 'hold' ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(20px)',
          transition: 'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <Image
          src="/images/logo-navbar.png"
          alt="Association Agadir Oumlil"
          width={140}
          height={140}
          className="brightness-0 invert drop-shadow-2xl"
          priority
        />
      </div>

      {/* Association name */}
      <div
        className="mt-6 text-center"
        style={{
          opacity: phase === 'hold' ? 1 : 0,
          transform: phase === 'hold' ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.8s ease 0.35s',
        }}
      >
        <p className="text-white/50 text-xs tracking-[0.35em] uppercase font-medium mb-2">
          Association
        </p>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Agadir Oumlil
        </h1>
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-1">
          For Development & Solidarity
        </p>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, hsl(40,83%,46%), hsl(40,83%,62%))',
            width: phase === 'hold' ? '100%' : '0%',
            transition: phase === 'hold' ? 'width 2.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            boxShadow: '0 0 12px hsl(40,83%,46%)',
          }}
        />
      </div>
    </div>
  );
};
