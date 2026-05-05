"use client"

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
