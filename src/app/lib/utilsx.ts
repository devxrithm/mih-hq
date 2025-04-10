import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to delay execution (useful for animations)
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if device is mobile (smaller screen)
export function isMobile(): boolean {
  return window.innerWidth < 768;
}

// Generate random number between min and max
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Clamp a value between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Map a value from one range to another
export function map(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Lerp (linear interpolation) between two values
export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}

// Convert degrees to radians
export function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Convert radians to degrees
export function radToDeg(radians: number): number {
  return radians * (180 / Math.PI);
}
