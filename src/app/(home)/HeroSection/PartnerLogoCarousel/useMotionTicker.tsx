'use client';
import { useCallback, useEffect, useRef } from 'react';

const LERP_FACTOR = 0.05;
const CYCLE_THRESHOLD = 1 / 3;

export function useMotionTicker(speed = 60) {
  const trackRef = useRef<HTMLDivElement>(null);

  const motionStateRef = useRef({
    progress: 0,
    currentSpeed: 1,
    targetSpeed: 1,
    lastTimestamp: 0,
  });

  useEffect(() => {
    const trackElement = trackRef.current;

    if (!trackElement) {
      return;
    }

    const cycleDurationMs = speed * 1000;
    let animationFrameId: number;

    const updateAnimation = (timestamp: number) => {
      const state = motionStateRef.current;

      const deltaTime = state.lastTimestamp ? timestamp - state.lastTimestamp : 16.67;

      state.lastTimestamp = timestamp;

      state.currentSpeed += (state.targetSpeed - state.currentSpeed) * LERP_FACTOR;

      state.progress += (deltaTime / cycleDurationMs) * state.currentSpeed;

      if (state.progress >= CYCLE_THRESHOLD) {
        state.progress -= CYCLE_THRESHOLD;
      }

      trackElement.style.transform = `translateX(-${state.progress * 100}%) translateZ(0)`;

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  const handleMouseEnter = useCallback(() => {
    motionStateRef.current.targetSpeed = 0;
  }, []);

  const handleMouseLeave = useCallback(() => {
    motionStateRef.current.targetSpeed = 1;
  }, []);

  return { trackRef, handleMouseEnter, handleMouseLeave };
}
