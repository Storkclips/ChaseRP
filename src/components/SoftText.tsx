
import React from 'react'
const SoftText: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = '', children }) => (
  <span className={`drop-shadow-[0_0_16px_rgba(168,85,247,0.6)] ${className}`}>{children}</span>
)
export default SoftText
