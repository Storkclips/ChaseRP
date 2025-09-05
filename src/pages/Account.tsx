
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'

export default function AccountPage(){
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
      </div>
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Account</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
            <CardContent className="text-neutral-300">Link your Steam, set your timezone, and update contact email.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Whitelist</CardTitle></CardHeader>
            <CardContent className="text-neutral-300">Status: <span className="text-emerald-400 font-semibold">Approved</span></CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
