
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'
import Button from '@/ui/button'

export default function SupportPage(){
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
      </div>
      <Header />
      <main className="flex-grow mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Support</h1>
        <p className="text-neutral-300 mb-4">Open a ticket on Discord and include VOD evidence when possible. Our team aims to respond within 24–48 hours.</p>
        <Button className="bg-fuchsia-600 hover:bg-fuchsia-700" onClick={() => window.open('https://discord.com', '_blank')}>Open Discord</Button>
      </main>
      <Footer />
    </div>
  )
}
