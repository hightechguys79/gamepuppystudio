import React from "react";
export default function PuppyMascot({ className = "" }){
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="GamePuppy logo" role="img">
      <defs><clipPath id="faceClip"><circle cx="32" cy="34" r="18"/></clipPath></defs>
      <path d="M14 20c-6 0-8 6-8 10 0 3 2 6 5 7 4 1 9-3 11-9l2-6-10-2z" fill="currentColor" opacity="0.85"/>
      <path d="M50 20c6 0 8 6 8 10 0 3-2 6-5 7-4 1-9-3-11-9l-2-6 10-2z" fill="currentColor" opacity="0.85"/>
      <circle cx="32" cy="34" r="20" fill="currentColor" opacity="0.12"/>
      <g clipPath="url(#faceClip)">
        <circle cx="32" cy="34" r="18" fill="currentColor" opacity="0.08"/>
        <circle cx="24" cy="32" r="2.2" fill="currentColor"/>
        <circle cx="40" cy="32" r="2.2" fill="currentColor"/>
        <path d="M32 36c2.2 0 4 1.8 4 4 0 3-3 5-6 5s-6-2-6-5c0-2.2 1.8-4 4-4h4z" fill="currentColor" opacity="0.2"/>
        <circle cx="32" cy="38" r="2.3" fill="currentColor"/>
        <path d="M29 41c1 .8 2.1 1.2 3 1.2s2-.4 3-1.2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
