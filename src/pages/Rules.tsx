
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'

export default function RulesPage(){
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
      </div>
      <Header />
      <main className="flex-grow mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Rules & SOPs</h1>
        <ol className="list-decimal ml-5 space-y-2 text-neutral-300">
          <li>Value of Life (VOL) applies at all times.</li>
          <li>No stream sniping, metagaming, or harassment.</li>
          <li>Escalation rules balance crime vs. law.</li>
          <li>No powergaming or rule-lawyering.</li>
          <li>Use common sense; preserve immersion.</li>
          <li>Appeals and reports via ticket with evidence.</li>
        </ol>
      </main>
      <Footer />
    </div>
  )
}
