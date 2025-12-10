// /hooks/use-countdown.ts
"use client";
import { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hr: number;
  min: number;
  sec: number;
  total: number;
}

/**
 * Custom hook to calculate the time left until a target date.
 * @param targetDateString The ISO date string of the deadline.
 * @returns Object containing days, hours, minutes, seconds, and total milliseconds left.
 */
export const useCountdown = (targetDateString: string): TimeLeft => {
  const target = useMemo(() => new Date(targetDateString), [targetDateString]);

  const calculateTimeLeft = (targetTime: number): TimeLeft => {
    const diff = Math.max(0, targetTime - Date.now());
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / (1000 * 60)) % 60;
    const hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hr, min, sec, total: diff };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target.getTime()));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target.getTime()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
};