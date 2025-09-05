
import React from 'react'
import Glow from '@/components/Glow'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/ui/button'
import Badge from '@/ui/badge'
import SoftText from '@/components/SoftText'

export default function QueuePage(){
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams()
  const position = Number(params.get('position') || 110)
  const total = Number(params.get('total') || 110)
  const autoLaunch = params.get('autoLaunch') !== '0'
  const server = params.get('server') || 'Game Server'
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_-10%,rgba(139,92,246,0.25),transparent),radial-gradient(800px_400px_at_10%_120%,rgba(14,165,233,0.18),transparent)]" />
      </div>
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(14,165,233,0.25),transparent),radial-gradient(900px_500px_at_90%_120%,rgba(139,92,246,0.25),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-24">
          <div className="-skew-y-3 rounded-2xl bg-gradient-to-r from-sky-600 to-fuchsia-600 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <div className="skew-y-3 px-6 sm:px-10 py-12 sm:py-16 text-center">
              <div className="uppercase tracking-widest text-white/90 text-sm sm:text-base">You are</div>
              <div className="mt-2 text-white font-black text-6xl sm:text-7xl md:text-8xl leading-none">{position}/{total}</div>
              <div className="mt-2 text-white/80 font-semibold">in queue</div>
              <div className="mt-1 text-white/70 text-sm">Server: <span className="font-semibold">{server}</span></div>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Button className="h-12 sm:h-14 px-8 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 shadow-lg hover:opacity-95" onClick={()=> (window.location.href = '/')}>Leave Queue</Button>
                <label className="flex items-center gap-2 text-white/80 text-sm">
                  <input type="checkbox" defaultChecked={autoLaunch} className="h-4 w-4" />
                  Auto launch FiveM
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
