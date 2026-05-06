'use client'
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';

interface Props {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animations: Record<AnimationType, { hidden: string; visible: string }> = {
  'fade-up':    { hidden: 'opacity-0 translate-y-16', visible: 'opacity-100 translate-y-0' },
  'fade-left':  { hidden: 'opacity-0 -translate-x-16', visible: 'opacity-100 translate-x-0' },
  'fade-right': { hidden: 'opacity-0 translate-x-16', visible: 'opacity-100 translate-x-0' },
  'fade-in':    { hidden: 'opacity-0', visible: 'opacity-100' },
  'zoom-in':    { hidden: 'opacity-0 scale-90', visible: 'opacity-100 scale-100' },
};

export const AnimatedSection: React.FC<Props> = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
  const { ref, visible } = useScrollAnimation();
  const { hidden, visible: vis } = animations[animation];
  const cls = 'transition-all duration-700 ease-out ' + (visible ? vis : hidden) + ' ' + className;
  return (
    <div ref={ref} style={{ transitionDelay: delay + 'ms' }} className={cls}>
      {children}
    </div>
  );
};