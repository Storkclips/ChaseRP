
import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'
import SoftText from '@/components/SoftText'
import Modal from '@/components/Modal'
import Button from '@/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card'
import Badge from '@/ui/badge'
import { motion } from 'framer-motion'
import { Star, Hammer, TimerReset, Watch, ShoppingBag, Headphones, Settings, LogIn, ChevronDown } from 'lucide-react'

export default function App(){
  const [queueOpen, setQueueOpen] = useState(false)
  const [server, setServer] = useState('Game Server')
  const [autoLaunch, setAutoLaunch] = useState(true)

  function handleJoinQueue(){
    const url = `/queue?server=${encodeURIComponent(server)}&autoLaunch=${autoLaunch ? '1':'0'}&position=110&total=110`
    window.open(url, '_blank')
    setQueueOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_-10%,rgba(139,92,246,0.25),transparent),radial-gradient(800px_400px_at_10%_120%,rgba(14,165,233,0.18),transparent)]" />
      </div>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:pt-12 pb-6">
          <div className="relative">
            <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="text-fuchsia-500">DASHBOARD</span>
              <span className="text-neutral-700 select-none ml-2 sm:ml-3 hidden sm:inline">PANEL</span>
            </motion.h2>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="uppercase text-xs sm:text-sm text-neutral-300">Welcome</span>
              <Badge className="bg-amber-400/20 border-amber-400/30 text-amber-200 text-xs sm:text-sm">STORK</Badge>
            </div>
          </div>
        </section>

        {/* Status cards */}
        <section className="mx-auto max-w-7xl px-4 pb-6">
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <Card className="bg-neutral-900/60 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm md:text-base text-neutral-300">Allowlist Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-emerald-300 text-sm md:text-base"><TimerReset className="h-4 w-4 md:h-5 md:w-5"/> <span className="font-semibold">APPROVED</span></div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/60 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm md:text-base text-neutral-300">Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-emerald-300 text-sm md:text-base"><Hammer className="h-4 w-4 md:h-5 md:w-5"/> <span className="font-semibold">GOOD</span></div>
                  <p className="text-xs text-neutral-400">Not banned</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/60 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm md:text-base text-neutral-300">Priority Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-fuchsia-300 text-sm md:text-base"><Star className="h-4 w-4 md:h-5 md:w-5"/> <span className="font-semibold">NONE</span></div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/60 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm md:text-base text-neutral-300">Hours Played</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-cyan-300"><Watch className="h-4 w-4 md:h-5 md:w-5"/> <span className="font-mono text-xl md:text-2xl font-black">112.4</span></div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action buttons */}
        <section className="mx-auto max-w-7xl px-4 pb-14">
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <Button onClick={()=>setQueueOpen(true)} className="w-full h-16 sm:h-20 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3">
              <LogIn className="h-4 w-4 sm:h-5 sm:w-5"/> Join Queue
            </Button>
            <a href="/account" className="contents"><Button className="w-full h-16 sm:h-20 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3"><Settings className="h-4 w-4 sm:h-5 sm:w-5"/> Account</Button></a>
            <a href="/store" className="contents"><Button className="w-full h-16 sm:h-20 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3"><ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5"/> Store</Button></a>
            <a href="/support" className="contents"><Button className="w-full h-16 sm:h-20 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:opacity-90 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3"><Headphones className="h-4 w-4 sm:h-5 sm:w-5"/> Support</Button></a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Queue modal */}
      <Modal open={queueOpen} onClose={()=>setQueueOpen(false)}>
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Select Server</h3>
          <label className="block text-sm text-neutral-300 mb-1" htmlFor="server">Server</label>
          <div className="relative">
            <select id="server" className="w-full appearance-none rounded-xl bg-neutral-800 border border-white/10 px-3 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500" value={server} onChange={(e)=>setServer(e.target.value)}>
              <option>Game Server</option>
              <option>NA West #1</option>
              <option>NA East #1</option>
              <option>EU #1</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
            <input type="checkbox" checked={autoLaunch} onChange={(e)=>setAutoLaunch(e.target.checked)} className="h-4 w-4" />
            Auto launch FiveM
          </label>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-white/15" onClick={()=>setQueueOpen(false)}>Cancel</Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500" onClick={handleJoinQueue}>Join Queue</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
