
import React from 'react'

export default function Modal({ open, onClose, children }:{ open:boolean; onClose:()=>void; children: React.ReactNode }){
  if(!open) return null
  return (
    <div aria-modal role="dialog" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900/95 shadow-2xl">
        {children}
      </div>
    </div>
  )
}
