import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '', glitchIntensity = 'medium' }) => {
  let glitchClass = '';
  switch (glitchIntensity) {
    case 'low':
      glitchClass = 'after:animate-[glitch_4s_ease-in-out_infinite]';
      break;
    case 'high':
      glitchClass = 'after:animate-[glitch_0.5s_ease-in-out_infinite]';
      break;
    case 'medium':
    default:
      glitchClass = 'after:animate-[glitch_2s_ease-in-out_infinite]';
      break;
  }

  return (
    <span 
      className={`relative inline-block ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
      <span 
        className={`absolute top-0 left-0 -z-10 text-cyber-neon-pink opacity-70 ${glitchClass}`}
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className={`absolute top-0 left-0 -z-20 text-cyber-neon-blue opacity-70 ${glitchClass}`} 
        style={{ animationDelay: '0.15s' }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
};

export default GlitchText;