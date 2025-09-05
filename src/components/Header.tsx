
import React, { useState } from 'react'
import Button from '@/ui/button'
import Badge from '@/ui/badge'
import SoftText from '@/components/SoftText'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 shadow-[0_0_30px_rgba(139,92,246,.65)]" aria-hidden />
          <Link to="/" className="font-black tracking-tight text-lg sm:text-xl md:text-2xl"><SoftText>ChaseRP</SoftText></Link>
          <Badge className="ml-2 bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs sm:text-sm">ONLINE</Badge>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/store"><Button variant="outline" className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10">Store</Button></Link>
          <Link to="/rules"><Button className="bg-fuchsia-600 hover:bg-fuchsia-700">Rules</Button></Link>
        </nav>
        <div className="md:hidden relative">
          <Button aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(v=>!v)} variant="outline" className="border-white/20">
            <Menu className="h-4 w-4" /><span className="sr-only">Open menu</span>
          </Button>
          {open && (
            <div role="menu" className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl">
              <Link to="/store"><Button role="menuitem" className="w-full mb-2 bg-gradient-to-r from-pink-500 to-orange-500" onClick={()=>setOpen(false)}>Store</Button></Link>
              <Link to="/rules"><Button role="menuitem" className="w-full mb-2 bg-fuchsia-600" onClick={()=>setOpen(false)}>Rules</Button></Link>
              <Button role="menuitem" variant="ghost" className="w-full text-red-300 hover:bg-red-500/10" onClick={()=>setOpen(false)}>Close</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
