
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Glow from '@/components/Glow'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'
import Button from '@/ui/button'

export default function StorePage(){
  const items = [
    { name: 'Priority Queue (30 days)', price: '$9.99' },
    { name: 'Priority Queue (90 days)', price: '$24.99' },
    { name: 'Custom Plate', price: '$4.99' },
    { name: 'Business License', price: '$14.99' },
  ]
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Glow className="bg-[conic-gradient(at_20%_10%,#0ea5e9_0deg,#8b5cf6_120deg,#22c55e_240deg,#e11d48_360deg)] opacity-30" />
      </div>
      <Header />
      <main className="flex-grow mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Store</h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <Card key={idx}>
              <CardHeader><CardTitle>{it.name}</CardTitle></CardHeader>
              <CardContent className="flex items-center justify-between"><span className="text-neutral-300">{it.price}</span><Button>Buy</Button></CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
