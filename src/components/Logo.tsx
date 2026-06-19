import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* Ribbon satin highlight gradient */}
        <linearGradient id="ribbonGrad" x1="100" y1="100" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="35%" stopColor="#DC2626" />
          <stop offset="65%" stopColor="#B91C1C" />
          <stop offset="85%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.95" />
        </linearGradient>

        {/* Satin reflection band */}
        <linearGradient id="satinHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1F2" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#FECDD3" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#EF4444" stopOpacity="0" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </linearGradient>

        {/* Path for text to curve along */}
        <path
          id="textCurvePath"
          d="M 120,290 C 135,215 180,120 280,105 C 365,92 410,135 410,175"
          fill="none"
        />

        {/* Underlay glow shadow */}
        <filter id="glowFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="#DC2626" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ribbon Shadow */}
      <path
        d="M 152,185 C 230,85 365,65 423,145 C 475,215 425,320 315,310 C 245,305 180,265 178,245 C 175,225 210,195 240,240 C 275,290 380,295 408,230 C 435,170 345,115 255,160 C 178,198 120,295 240,460"
        stroke="rgba(15, 23, 42, 0.08)"
        strokeWidth="38"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main Satin Ribbon Loop */}
      <path
        d="M 255,160 C 178,198 120,295 240,460"
        stroke="#1E293B"
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
      {/* Red Ribbon Left Overlapping Trunk */}
      <path
        d="M 255,160 C 178,198 120,295 240,460"
        stroke="url(#ribbonGrad)"
        strokeWidth="28"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Swallowtail (Left End pointing out) */}
      <path
        d="M 148,187 L 65,185 L 105,215 L 75,270 L 155,235 Z"
        fill="url(#ribbonGrad)"
        filter="url(#glowFilter)"
      />

      {/* Beautiful Satin Curve (Right Side Loop) */}
      <path
        d="M 152,185 C 230,85 365,65 424,145 C 475,215 425,320 315,310 C 235,302 185,255 178,245"
        stroke="url(#ribbonGrad)"
        strokeWidth="42"
        strokeLinecap="round"
        fill="none"
        filter="url(#glowFilter)"
      />

      {/* Beautiful High-contrast White Reflection Accent on the Right Loop edge */}
      <path
        d="M 240,110 C 295,85 375,85 415,145 C 455,205 405,285 320,290"
        stroke="url(#satinHighlight)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* CURVED TEXT ON PATH */}
      <text fill="#ffffff" fontSize="23" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">
        <textPath href="#textCurvePath" startOffset="3%" fill="#1E293B" stroke="#ffffff" strokeWidth="6" paintOrder="stroke fill">
          CANCER SURVIVORS MALAYSIA
        </textPath>
      </text>
      <text fill="#1E293B" fontSize="23" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">
        <textPath href="#textCurvePath" startOffset="3%">
          CANCER SURVIVORS MALAYSIA
        </textPath>
      </text>

      {/* JAWI CALLIGRAPHY/Typography "Kanser Survivor Malaysia" rendered as clean vector paths */}
      <g transform="translate(185, 305)" fill="#1E293B">
        {/* Beautifully drawn Arabic/Jawi calligraphic style strokes for authenticity */}
        {/* This represents: "كنسر سوروايرز مليسيا" */}
        {/* Part 1: Kanser (ك ن س ر) */}
        <path d="M 60,18 C 75,18 84,32 94,32 C 102,32 108,22 115,12 C 117,10 120,12 118,15 C 110,28 102,38 92,38 C 78,38 72,24 58,24 C 48,24 40,32 30,35 C 25,36 24,32 28,30 C 38,25 45,18 60,18 Z" />
        <path d="M 108,10 C 111,10 113,12 111,15 C 109,17 106,16 104,13 C 102,10 105,10 108,10 Z" /> {/* Dot */}
        <path d="M 115,4 M 100,5 C 103,5 104,7 102,9 C 100,10 98,9 96,7 C 95,5 98,5 100,5 Z" /> {/* Second Dot */}
        
        {/* Part 2: Survivor (س و ر ۏ ا ي ۏ ر ز) */}
        <path d="M 12,38 C -4,38 -15,50 -28,50 C -42,50 -48,38 -58,38 C -68,38 -75,44 -85,44 C -88,44 -89,40 -86,38 C -78,32 -68,26 -55,26 C -40,26 -32,38 -18,38 C -4,38 8,24 20,24 C 23,24 23,28 20,30 C 18,32 15,38 12,38 Z" />
        <path d="M -30,62 C -45,62 -55,52 -62,42 C -63,40 -60,38 -58,40 C -53,48 -43,56 -30,56 C -18,56 -8,46 -8,36 C -8,28 -15,22 -22,22 C -32,22 -38,32 -38,40 C -38,41 -40,41 -40,40 C -40,26 -28,15 -14,15 C 0,15 8,26 8,38 C 8,52 -2,62 -30,62 Z" /> {/* Waw/Loop */}
        <path d="M -75,30 C -73,30 -71,32 -73,35 C -75,37 -78,36 -80,33 C -82,30 -78,30 -75,30 Z" /> {/* Calligraphy Diacritic/dot */}
        <path d="M -50,15 L -45,8 C -44,7 -42,7 -43,9 L -48,16 Z" /> {/* Stroke */}
        
        {/* Part 3: Malaysia (م ل ي س ي ا) */}
        <path d="M -92,46 C -105,46 -115,54 -128,54 C -140,54 -148,44 -155,30 C -156,28 -154,26 -152,28 C -146,38 -138,46 -126,46 C -115,46 -108,36 -98,36 C -88,36 -82,42 -76,46 C -74,47 -75,50 -78,49 C -82,48 -87,46 -92,46 Z" />
        <path d="M -162,25 C -165,15 -175,2 -190,2 C -202,2 -210,12 -210,25 C -210,38 -200,48 -185,48 C -170,48 -162,38 -162,25 Z M -185,42 C -195,42 -200,34 -200,25 C -200,16 -194,8 -185,8 C -176,8 -171,16 -171,25 C -171,34 -176,42 -185,42 Z" /> {/* Meem loop */}
        <path d="M -115,58 C -118,58 -120,56 -118,53 C -116,51 -113,52 -111,55 C -109,58 -112,58 -115,58 Z" /> {/* Bottom dot */}
        <path d="M -125,58 C -128,58 -130,56 -128,53 C -126,51 -123,52 -121,55 C -119,58 -122,58 -125,58 Z" /> {/* Bottom dot 2 */}
      </g>
    </svg>
  );
}
