
import React from 'react'
const Glow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 [filter:blur(60px)] opacity-60 ${className}`} />
)
export default Glow
